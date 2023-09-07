import Alpine from 'alpinejs';

window.Apline = Alpine;

Alpine.data('handle_menu_hover', (selected, active) => ({
   active,
   selected,
   mouseOver() {
      this.selected = -1;
   },
   mouseLeave() {
      this.selected = active;
   },
   mouseClick(newActive) {this.active = newActive}
}));

Alpine.start();
