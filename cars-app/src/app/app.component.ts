import {Component, HostListener} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  priceForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    cars: ['', Validators.required],
  })

  carsData = [
    {
      image: "1.png",
      name: "Lamborghini Huracan Spyder",
      transmission: "полный",
      engine: 5.2,
      year: 2019,
    },
    {
      image: "2.png",
      name: "Chevrolet Corvette",
      transmission: "полный",
      engine: 6.2,
      year: 2017,
    },
    {
      image: "3.png",
      name: "Ferrari California",
      transmission: "полный",
      engine: 3.9,
      year: 2010,
    },
    {
      image: "4.png",
      name: "Lamborghini Urus",
      transmission: "полный",
      engine: 4.0,
      year: 2019,
    },
    {
      image: "5.png",
      name: "Audi R8",
      transmission: "полный",
      engine: 5.2,
      year: 2018,
    },
    {
      image: "6.png",
      name: "Chevrolet Camaro",
      transmission: "полный",
      engine: 2.0,
      year: 2019,
    },
    {
      image: "7.png",
      name: "Maserati Quattroporte",
      transmission: "полный",
      engine: 3.0,
      year: 2018,
    },
    {
      image: "8.png",
      name: "Dodge Challenger",
      transmission: "полный",
      engine: 6.4,
      year: 2019,
    },
    {
      image: "9.png",
      name: "Nissan GT-R",
      transmission: "полный",
      engine: 3.8,
      year: 2019,
    },
  ];

  constructor(private fb:FormBuilder) {
  }
  goScroll(target: HTMLElement, car?: any) {
    target.scrollIntoView({behavior: "smooth"});
    if (car) {
      this.priceForm.patchValue({cars: car.name});
    }
  }

  trans: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.trans = {transform: 'translate3d(' + ((e.clientX * 0.3) / 8) + 'px,' + ((e.clientY * 0.3) / 8) + 'px,0px)'};
  }

  bgPos: any;
  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.bgPos = {backgroundPositionX: '0' + (0.3 * window.scrollY) + 'px'};
  }

  onSubmit() {
    if (this.priceForm.valid) {
      alert("Спасибо за заявку, мы свяжемся с Вами в ближайшее время!")
      this.priceForm.reset();
    }
  }
}
