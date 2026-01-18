import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  signal,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Category, Item } from '../../lib/types';
import { ChevronLeft, ChevronRight, LucideAngularModule } from 'lucide-angular';
import { Card } from '../Card/Card';
import { getMoviesByGenre } from '../../lib/api';

@Component({
  selector: 'app-category-list',
  imports: [LucideAngularModule, Card],
  templateUrl: './CategoryList.html',
  styleUrl: './CategoryList.css',
})
export class CategoryList implements AfterViewInit, OnDestroy, OnChanges {
  @Input()
  category: Category | undefined;

  items: Item[] = [];

  async ngOnChanges(changes: SimpleChanges) {
    if (changes['category'] && changes['category'].currentValue && this.category) {
      this.items = await getMoviesByGenre(this.category.id);
      // Attendre que le DOM soit mis à jour avant de vérifier le overflow
      setTimeout(() => {
        this.checkOverflow();
      }, 0);
    }
  }

  // Référence au div contenant la liste des catégories
  @ViewChild('categoryList') categoryList: ElementRef<HTMLDivElement> | undefined;

  showArrows = signal<boolean>(false);

  // Icones
  readonly ChevronRight = ChevronRight;
  readonly ChevronLeft = ChevronLeft;

  ngAfterViewInit() {
    // Check si le div dépasse l'écran et ajouter des flèches si nécessaire
    this.checkOverflow();

    // Écoute les changements de taille de la fenêtre pour réévaluer l'affichage des flèches
    window.addEventListener('resize', () => {
      this.checkOverflow();
    });
  }

  ngOnDestroy() {
    window.removeEventListener('resize', () => {
      this.checkOverflow();
    });
  }

  onClickArrow(direction: 'left' | 'right') {
    if (this.categoryList) {
      const element = this.categoryList.nativeElement;

      // Récupérer la largeur de la première card + le gap
      const firstCard = element.querySelector('app-card');
      let scrollAmount = 260; // Valeur par défaut (250px + 10px gap)

      if (firstCard) {
        const cardWidth = firstCard.getBoundingClientRect().width;
        const gap = 10; // Gap défini dans le CSS
        scrollAmount = cardWidth + gap;
      }

      if (direction === 'left') {
        element.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        element.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  }

  /**
   * Vérifie si le contenu dépasse la largeur visible et met à jour l'affichage des flèches
   */
  checkOverflow() {
    if (this.categoryList) {
      const element = this.categoryList.nativeElement;
      this.showArrows.set(element.scrollWidth > element.clientWidth);
      console.log(
        'scrollWidth:',
        element.scrollWidth,
        'clientWidth:',
        element.clientWidth,
        'showArrows:',
        this.showArrows(),
      );
    } else {
      this.showArrows.set(false);
    }
  }
}
