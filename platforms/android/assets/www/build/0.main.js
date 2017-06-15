webpackJsonp([0],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autorizacao_local__ = __webpack_require__(282);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutorizacaoLocalPageModule", function() { return AutorizacaoLocalPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AutorizacaoLocalPageModule = (function () {
    function AutorizacaoLocalPageModule() {
    }
    return AutorizacaoLocalPageModule;
}());
AutorizacaoLocalPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__autorizacao_local__["a" /* AutorizacaoLocalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__autorizacao_local__["a" /* AutorizacaoLocalPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__autorizacao_local__["a" /* AutorizacaoLocalPage */]
        ]
    })
], AutorizacaoLocalPageModule);

//# sourceMappingURL=autorizacao-local.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autorizado_autorizado__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__acao_autorizado_acao_autorizado__ = __webpack_require__(203);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorizacaoLocalPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutorizacaoLocalPage = (function () {
    function AutorizacaoLocalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listaAutorizacoes = [];
        this.listaAutorizacoes = [
            { nome: "Claúdio Dantas", parentesco: "Tio", cpf: "016.888.999-78", tipo: "Temporária", corTipo: "vermelho", urlFoto: "assets/img/marty-avatar.png" },
            { nome: "Pedro Lemos II", parentesco: "Primo", cpf: "015.777.999-78", tipo: "Temporária", corTipo: "vermelho", urlFoto: "assets/img/marty-avatar.png" },
            { nome: "José Maria da Silva", parentesco: "Tio", cpf: "016.888.999-78", tipo: "Permanente", corTipo: "black", urlFoto: "assets/img/marty-avatar.png" }
        ];
    }
    AutorizacaoLocalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AutorizacaoLocalPage');
    };
    AutorizacaoLocalPage.prototype.alterarAutorizado = function (autorizado) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__autorizado_autorizado__["a" /* AutorizadoPage */]);
    };
    AutorizacaoLocalPage.prototype.acoesRealizadas = function (autorizado) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__acao_autorizado_acao_autorizado__["a" /* AcaoAutorizadoPage */]);
    };
    return AutorizacaoLocalPage;
}());
AutorizacaoLocalPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-autorizacao-local',template:/*ion-inline-start:"C:\Users\Danilo\ionic\AppEscola\src\pages\autorizacao-local\autorizacao-local.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Autorizações</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngFor="let autorizado of listaAutorizacoes">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="{{autorizado.urlFoto}}">\n        </ion-thumbnail>\n        <h2>{{autorizado.nome}}</h2>\n        <p>Parentesco: {{autorizado.parentesco}}</p>\n        <p>CPF: {{autorizado.cpf}}</p>\n        <p> Tipo: <span class={{autorizado.corTipo}}> {{autorizado.tipo}}</span></p>\n      </ion-item>\n\n      <ion-item>\n        <button ion-button icon-left clear item-end (click)="acoesRealizadas(autorizado)">\n          <ion-icon name="list"></ion-icon>\n          Ações realizadas\n        </button>\n        <button ion-button icon-left clear item-end (click)="alterarAutorizado(autorizado)">\n          <ion-icon name="create"></ion-icon>\n          Editar\n        </button>\n        <button ion-button icon-left clear item-end color="danger" (click)="excluirAutorizado(autorizado)">\n          <ion-icon name="trash"></ion-icon>\n          Excluir\n        </button>\n      </ion-item>\n    </ion-card>\n</ion-content>\n\n<ion-fab right bottom padding>\n    <button ion-fab color="danger" (click)="adicionarAutorizacao()"><ion-icon name="add" ></ion-icon></button>\n</ion-fab>\n'/*ion-inline-end:"C:\Users\Danilo\ionic\AppEscola\src\pages\autorizacao-local\autorizacao-local.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AutorizacaoLocalPage);

//# sourceMappingURL=autorizacao-local.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map