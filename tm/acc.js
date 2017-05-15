/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**

- számla kibocsátás kelte
- számla sorszáma, amely a számlát egyértelműen azonosítja
- számlakiállító neve, címe, adószáma
- vevő neve, címe
- értékesített termék/szolgáltatás megnevezése, mennyisége, nettó egységára (adó nélküli értéke)
- számla nettó értéke (adó nélküli értéke)
- az ÁFA százaléka és értéke

Esetfüggő kötelező tartalmi elemek:
- "Kisadózó" szöveg feltüntetése, ha a számlakiállító KATA (kis adózók tételes adója) szerint adózik
- számlakiállító közösségi adószáma, amennyiben EU-n belül, adó felszámítása nélkül számláz
- vevő adószáma  (külföldi vevő esetén közösségi adószám), amennyiben fordított áfa-s számlát állít ki vagy ha EU-n belül, adó felszámítása nélkül számláz vagy amennyiben a számla ÁFA értéke eléri a 1 millió forintot és a számlát kiállító és a vevő is belföldi
- számla teljesítésének napja, amennyiben az eltér a számla kibocsátás keltétől
- alkalmazott árengedmény, amennyiben azt az egységár nem tartalmazza
- adómentesség esetén jogszabályi hivatkozás vagy más utalás (pl. ÁFA kulcs neve) arra, hogy az értékesített termék/szolgáltatás mentes az adó alól
- devizás számla esetén, az ÁFA értéke forintban átszámolva (akkor is, ha az 0 Ft), illetve az átszámításhoz alkalmazott árfolyam
- "pénzforgalmi elszámolás" kifejezés feltüntetése, ha az adóalany a pénzforgalmi adózási módot választotta
- "önszámlázás" kifejezés feltüntetése, ha a terméket/szolgáltatást nem az ügyletet teljesítő (szállító), hanem a terméket beszerző (vevő) állítja ki
- "fordított adózás" kifejezés feltüntetése fordított áfa-s számla esetén (amikor az értékesített termék/szolgáltatás után a vevő az adófizetésre kötelezett)
- EU-n belül, adó felszámítása nélkül értékesített új közlekedési eszközre vonatkozó technikai adatok (259. § 25. pont)
- "különbözet szerinti szabályozás - utazási irodák" kifejezés feltüntetése utazásszervezési szolgáltatás nyújtása esetén
- "különbözet szerinti szabályozás - használt cikkek" kifejezés feltüntetése használt ingóság értékesítése esetén
- "különbözet szerinti szabályozás - műalkotások" kifejezés feltüntetése műalkotás értékesítése esetén
- "különbözet szerinti szabályozás - gyűjteménydarabok és régiségek" kifejezés feltüntetése gyűjteménydarab vagy régiség értékesítése esetén
- pénzügyi képviselő neve, címe és adószáma, amennyiben a számlát a cég pénzügyi képviselője (pl. könyvelő) állította ki

Opcionálisan (nem kötelezően!) feltüntethető adatok:
- értékesített termék/szolgáltatás besorolási jelölése pl. VTSZ / SZJ / TESZOR szám, stb.
- fizetési mód
- fizetési határidő
 * 
 * @param {type} $
 * @returns {undefined}
 * 
 * acc_type
 * date
 * inv_no
 * text inv_partn and operation
 * inv_sum brt
 * ------
 * t ledger_acc_num
 * if prev 3 or 4 choose partner, then choose vat
 * brt. until reach the inv_sum
 * ------
 * k ledger_acc_num
 * if prev 3 or 4 choose partner, then choose vat
 * brt. until reach the inv_sum
 * ------
 * ------
 * acc_type -> ledger_acc_num
 * acc_type(KS) -> date
 * inv_num->uniq
 * 
 */

function AccountItem(name) {
	var items = {}, currentHeaderField;
	return {
		 setPrev: function($key, $value) {
		 	items[$key] = $value;
		 }
		 getPrev: function($key) {
		 	return items[$key];
		 },
		 setCurrentHeaderField: function($field_name) {
			currentHeaderField = $field_name;
		 }
	}
}

(function($) {
	
	$(document).ready(function() {
		$(document).on('keydown', '#textbox', function(e) { 
		  var keyCode = e.keyCode || e.which; 

		  if (keyCode == 9) { 
		    e.preventDefault(); 
		    // call custom function here
		  } 
		});
		$(document).on('change', '#acc_type', function() {
			var $self = $(this);
			AccountItem.getPrev($self.val());
		});
		$(document).on('focusout', '#acc_date_of_completition', function() {
			var $self = $(this);
			AccountItem.checkForValidDay($self.val());
			//AccountItem

		});
		$(document).on('focusout', '#acc_date_of_completition', function() {
			var $self = $(this);
			//AccountItem

		});
		$(document).on('focusout', '#acc_date_of_completition', function() {
			var $self = $(this);
			//AccountItem

		});
		$(document).on('focusout', '#acc_date_of_completition', function() {
			var $self = $(this);
			//AccountItem

		});		
		$(document).on('focusout', '#acc_date_of_completition', function() {
			var $self = $(this);
			//AccountItem

		});
	});
	
})(jQuery);