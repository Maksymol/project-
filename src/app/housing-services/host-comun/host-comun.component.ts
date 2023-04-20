import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Injectable, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-host-comun',
  templateUrl: './host-comun.component.html',
  styleUrls: ['./host-comun.component.scss'],
  template: '{{ selectedFlatId }}'
})
export class HostComunComponent {

  showInput = false;
  loading = false;
  selectedFlatId$: any;
  comunCreate: any;
  public selectedFlatId: any | null;
  houses: { id: number, name: string }[] = [];
  addressHouse: FormGroup<{ flat_id: FormControl<any>; }> | undefined;

  formErrors: any = {
    house: '',
  };

  reloadPageWithLoader() {
    this.loading = true;
    setTimeout(() => {
      location.reload();
    }, 500);
  }

  selectHouse = new FormGroup({
    house: new FormControl('виберіть оселю')
  });

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    const houseJson = localStorage.getItem('house');
    if (houseJson) {
      this.selectHouse.setValue({ house: JSON.parse(houseJson).flat_id });
    }

    const userJson = localStorage.getItem('user');
    if (userJson) {
      this.http.post('http://localhost:3000/flatinfo/localflatid', JSON.parse(userJson))
        .subscribe(
          (response: any | undefined) => {
            this.houses = response.ids.map((item: { flat_id: any; }, index: number) => ({
              id: index + 1,
              name: item.flat_id
            }));
            const houseJson = localStorage.getItem('house');
            if (houseJson) {
              this.selectHouse.setValue({ house: JSON.parse(houseJson).flat_id });
            }
          },
          (error: any) => {
            console.error(error);
          }
        );

      this.selectHouse.get('house')?.valueChanges.subscribe(selectedFlatId => {
        if (selectedFlatId) {
          console.log(localStorage.getItem('house'))
          console.log('Ви вибрали оселю з ID:', selectedFlatId);
          localStorage.removeItem('house');
          localStorage.setItem('house', JSON.stringify({ flat_id: selectedFlatId }));

          this.http.post('http://localhost:3000/flatinfo/localflat', { auth: JSON.parse(userJson), flat_id: selectedFlatId })
            .subscribe(
              (response: any) => {
                if (response !== null) {
                  this.addressHouse = this.fb.group({
                    flat_id: [response.flat.flat_id],
                  });
                }
              },
              (error: any) => {
                console.error(error);
              }
            );
          this.selectedFlatId = selectedFlatId;
        } else {
          console.log('Нічого не вибрано');
        }
      });
    } else {
      console.log('user not found');
    }
  }

  onSelectionChange() {
    this.loading = true;

    if (this.selectedFlatId) {
      console.log('Ви вибрали оселю з ID:', this.selectedFlatId);
      localStorage.setItem('house', JSON.stringify({ flat_id: this.selectedFlatId }));

      this.selectedFlatId = this.selectedFlatId;
      const userJson = localStorage.getItem('user');
      if (userJson) {
        this.http.post('http://localhost:3000/flatinfo/localflat', { auth: JSON.parse(userJson), flat_id: this.selectedFlatId })
          .subscribe(
            (response: any) => {
              if (response !== null) {
                this.addressHouse = this.fb.group({
                  flat_id: [response.flat.flat_id],
                });
              }
            },
            (error: any) => {
              console.error(error);
            }
          );
      } else {
        console.log('user not found');
      }

    } else {
      console.log('Нічого не вибрано');
    }

    location.reload();
  }

  onSubmitComunCreate(): void {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      this.http.post('http://localhost:3000/flatinfo/add/flat_id', { auth: JSON.parse(userJson), new: this.comunCreate.value })
        .subscribe((response: any) => {
          console.log(response);
        }, (error: any) => {
          console.error(error);
        });
    } else {
      console.log('house not found');
    }
  }

  onSubmitDeleteComun(): void {
    const selectedFlatId = this.selectHouse.get('house')?.value;
    const houseJson = localStorage.getItem('house');
    if (houseJson) {
      console.log(JSON.parse(houseJson))
    }

    const userJson = localStorage.getItem('user');
    if (userJson) {
      this.http.post('http://localhost:3000/flatinfo/', { auth: JSON.parse(userJson), flat_id: selectedFlatId })
        .subscribe((response: any) => {
          console.log(response);
        }, (error: any) => {
          console.error(error);
        });
    } else {
      console.log('house not found');
    }
  }

}
