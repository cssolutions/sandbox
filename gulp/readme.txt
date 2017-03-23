1. bower.json elkészítése
2. egyes, nem predefined fájlok vendorok regisztrálása:
bower register bootstrap-floating-labels https://github.com/fauxparse/bootstrap-floating-labels -f'
bower register jq-range-slider https://github.com/ghusse/jQRangeSlider -f'
bower register bs-grid https://github.com/pontikis/bs_grid -f'
bower register bs-tabdrop https://github.com/jmschabdach/bootstrap-tabdrop -f'
bower register bs-context-menu https://github.com/dgoguerra/bootstrap-menu -f'
bower register bs-autohide-navbar https://github.com/istvan-ujjmeszaros/bootstrap-autohidingnavbar -f'
bower register bs-bootbox https://github.com/makeusabrew/bootbox -f'
2. installálása, telepítése(installálja a bower.json-ban lévő dependencies-eket) :bower install


assets/custom   custom js and css files. Ide manuálisan kell a fileokat létrehozni, szerkeszteni
assets/vendor   vendor js and css files. Ide a bower install -al kerülnek fel a fileok
dev/            custom.css cusjtom.js vendor.css cendor.js not in minified format but in concatinated. - recompile_vendor(if added) - watch_custom if modified
prod/           final.css final.js in minified format derviced from concatinated custom and vendor css and js files - production

