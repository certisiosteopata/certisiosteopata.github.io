import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';

window.Apline = Alpine;

Alpine.plugin(intersect);

Alpine.data('handle_menu_hover', (selected, active) => ({
   active,
   selected,
   mouseOver() {
      this.selected = -1;
   },
   mouseLeave() {
      this.selected = active;
   },
   mouseClick(newActive) {
      this.selected = -1;
      this.active = newActive;
   }
}));

Alpine.start();
