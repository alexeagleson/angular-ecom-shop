import { Component, Input } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})

export class ProductFilterComponent {
  @Input('category') category;
  categories$;

  constructor(private categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();
  }
}
