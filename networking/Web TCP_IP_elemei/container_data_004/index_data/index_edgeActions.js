
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.$("texr_BTN_hov").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","mousemove",function(sym,e){sym.$("texr_BTN_hov").show();sym.$("texr_BTN").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","mouseout",function(sym,e){sym.$("texr_BTN_hov").hide();sym.$("texr_BTN").show();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-52521511");