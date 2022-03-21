import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=>RatingComponent),
    multi:true

  }]
})
export class RatingComponent implements OnInit ,ControlValueAccessor{
  
  value = 2;
  hoveredRating = 2;
  isMouseOver = false;

  onChange: any = () => { };
  onTouched: any = () => { };

  @Input() disabled =true;

  constructor() { }
  writeValue(value: number): void {
    this.value =value;
  }
  registerOnChange(fn: any): void {
    this.onChange =fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched =fn;
  }
  setDisabledState?(isDisabled: boolean): void {
   this.disabled =isDisabled;
  }

  ngOnInit(): void {
  }

  onRatingMouseEnter(rating: number) {
    if(this.disabled)return;
    this.hoveredRating = rating;
    this.isMouseOver = true;
    }
    onRatingMouseLeave() {
      if(this.disabled) return;
    this.hoveredRating = null;
    this.isMouseOver = false;
    }
    selectRating(rating: number) {
    this.value = rating;
    this.onChange(rating);
    }


   

}
