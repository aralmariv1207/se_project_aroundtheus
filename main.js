!function(){"use strict";class e{constructor(e,t,s){let{name:n,link:o}=e;this._name=n,this._link=o,this._cardSelector=t,this._handleImageClick=s}_setEventListeners(){this.likeButton=this._cardElement.querySelector(".card__like-button"),this.likeButton.addEventListener("click",(()=>{this._handleLikeIcon()})),this.deleteButton=this._cardElement.querySelector(".card__delete-button"),this.deleteButton.addEventListener("click",(()=>{this._handleDeleteCard()})),this._imageElement.addEventListener("click",(()=>{this._handleImageClick({name:this._name,link:this._link})}))}_handleDeleteCard(){this._cardElement.remove(),this._cardElement=null}_handleLikeIcon(){this.likeButton.classList.toggle("card__like-button_active")}getView(){return this._cardElement=document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0),this._imageElement=this._cardElement.querySelector(".card__image"),this._imageElement.src=this._link,this._imageElement.alt=this._name,this._titleElement=this._cardElement.querySelector(".card__title"),this._titleElement.textContent=this._name,this._setEventListeners(),this._cardElement}}class t{constructor(e,t){this._formSelector=e.inputSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=t}_showInputError(e){const t=this._formElement.querySelector(`#${e.id}-error`);e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}_hideInputError(e){const t=this._formElement.querySelector(`#${e.id}-error`);e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}_checkInputValidity(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}_toggleButtonState(){this._hasInvalidInput()?this.disableButton():(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1)}_hasInvalidInput(){return!this._inputElements.every((e=>e.validity.valid))}_setEventListeners(){this._inputElements=[...this._formElement.querySelectorAll(this._inputSelector)],this._submitButton=this._formElement.querySelector(this._submitButtonSelector),this._inputElements.forEach((e=>{e.addEventListener("input",(t=>{this._checkInputValidity(e),this._toggleButtonState()}))}))}enableValidation(){this._formElement.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners()}resetValidation(){this._inputElements.forEach((e=>this._hideInputError(e))),this._toggleButtonState()}disableButton(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}}class s{constructor(e){this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}open(){this._popup.classList.add("modal_opened"),document.addEventListener("keydown",this._handleEscClose)}close(){this._popup.classList.remove("modal_opened"),document.removeEventListener("keydown",this._handleEscClose)}_handleEscClose(e){"Escape"===e.key&&this.close()}setEventListeners(){this._popup.addEventListener("click",(e=>{(e.target.classList.contains("modal")||e.target.classList.contains("modal__close"))&&this.close()}))}}class n extends s{constructor(e,t){super(e),this._handleFormSubmit=t,this._form=this._popup.querySelector(".modal__form"),this._inputList=this._form.querySelectorAll(".modal__input")}_getInputValues(){const e={};return this._inputList.forEach((t=>{e[t.name]=t.value})),e}setInputValues(e){this._inputList.forEach((t=>{void 0!==e[t.name]?t.value=e[t.name]:(console.log(`No data provided for input with name: ${t.name}`),t.value="")}))}setEventListeners(){super.setEventListeners(),this._form.addEventListener("submit",(e=>{e.preventDefault(),this._handleFormSubmit(this._getInputValues())}))}getForm(){return this._form}}const o=new class{constructor(e,t){let{items:s,renderer:n}=e;this._items=s,this._renderer=n,this._container=document.querySelector(t)}renderItems(){this._items.forEach((e=>this._renderer(e)))}addItem(e){this._container.prepend(e)}}({items:[{name:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"},{name:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"}],renderer:e=>{const t=u(e);o.addItem(t)}},".cards__list"),i=document.querySelector("#profile-edit-button"),r=new n("#profile-edit-modal",(e=>{m.setUserInfo({name:e.title,job:e.description}),r.close()}));r.setEventListeners(),i.addEventListener("click",(()=>{const e=m.getUserInfo();r.setInputValues({title:e.name,description:e.job}),r.open()}));const a=document.forms["Add-a-New-Card"];a.reset();const l=new n("#add-card-modal",(e=>{o.addItem(u({name:e.title,link:e.url})),l.close(),a.reset(),h["Add-a-New-Card"].disableButton()}));l.setEventListeners();const c=new class extends s{constructor(e){super(e),this._imageElement=this._popup.querySelector(".modal__preview-image"),this._captionElement=this._popup.querySelector(".modal__caption")}open(e){let{name:t,link:s}=e;this._imageElement.src=s,this._imageElement.alt=t,this._captionElement.textContent=t,super.open()}}("#image-preview-modal");c.setEventListeners();const m=new class{constructor(e){let{nameSelector:t,jobSelector:s}=e;this._nameElement=document.querySelector(t),this._jobElement=document.querySelector(s)}getUserInfo(){return{name:this._nameElement.textContent,job:this._jobElement.textContent}}setUserInfo(e){let{name:t,job:s}=e;this._nameElement.textContent=t,this._jobElement.textContent=s}}({nameSelector:".profile__title",jobSelector:".profile__description"});function d(e){c.open({name:e.name,link:e.link})}function u(t){return new e(t,"#card-template",d).getView()}o.renderItems(),document.querySelector("#profile-edit-modal");const _=document.querySelector("#image-preview-modal"),h=(_.querySelector(".modal__preview-image"),document.querySelector(".modal__caption"),_.querySelector(".modal__close"),{});var p;p={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"},Array.from(document.querySelectorAll(p.formSelector)).forEach((e=>{const s=new t(p,e),n=e.getAttribute("name");h[n]=s,s.enableValidation()})),document.querySelector(".cards__list");const E=document.querySelector("#add-card-modal"),v=E.querySelector(".modal__form"),S=(E.querySelector(".modal__close"),document.querySelector(".profile__add-button"));v.querySelector("#add-card-form"),v.querySelector("#add-url"),S.addEventListener("click",(()=>l.open()))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBa0J6SCxjQUFjLGlCQUdYLENBQUMsR0FFRWtCLFFEakVULENBQ2J3RyxhQUFjLGVBQ2RyRyxjQUFlLGdCQUNmRyxxQkFBc0IsaUJBQ3RCRSxvQkFBcUIseUJBQ3JCRSxnQkFBaUIsMEJBQ2pCRSxXQUFZLHdCQzRERzZGLE1BQU1DLEtBQUtsSCxTQUFTdUMsaUJBQWlCL0IsRUFBT3dHLGVBQ3BEeEUsU0FBUy9CLElBQ2hCLE1BQU0wRyxFQUFZLElBQUk1RyxFQUFjQyxFQUFRQyxHQUV0QzJHLEVBQVczRyxFQUFZNEcsYUFBYSxRQUcxQ2QsRUFBZWEsR0FBWUQsRUFDM0JBLEVBQVV6RSxrQkFBa0IsSUFTZDFDLFNBQVNWLGNBQWMsZ0JBQXpDLE1BRU1nSSxFQUFldEgsU0FBU1YsY0FBYyxtQkFDdENpSSxFQUFxQkQsRUFBYWhJLGNBQWMsZ0JBSWhEa0ksR0FEMEJGLEVBQWFoSSxjQUFjLGlCQUNsQ1UsU0FBU1YsY0FBYyx5QkFFekJpSSxFQUFtQmpJLGNBQWMsa0JBQ25DaUksRUFBbUJqSSxjQUFjLFlBa0J0RGtJLEVBQWlCakksaUJBQWlCLFNBQVMsSUFBTThHLEVBQXFCakQsUSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X2Fyb3VuZHRoZXVzLy4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9hcm91bmR0aGV1cy8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL3NlX3Byb2plY3RfYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcclxuICBjb25zdHJ1Y3Rvcih7IG5hbWUsIGxpbmsgfSwgY2FyZFNlbGVjdG9yLCBoYW5kbGVJbWFnZUNsaWNrKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX2xpbmsgPSBsaW5rO1xyXG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xyXG4gICAgdGhpcy5faGFuZGxlSW1hZ2VDbGljayA9IGhhbmRsZUltYWdlQ2xpY2s7XHJcbiAgfVxyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAvL2NyZWF0ZSB0aGUgdmFyaWFibGU6IFwiLmNhcmRfX2xpa2UtYnV0dG9uXCJcclxuICAgIHRoaXMubGlrZUJ1dHRvbiA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIik7XHJcblxyXG4gICAgLy9hZGQgdGhlIGV2ZW50IGxpc3RlbmVyXHJcbiAgICB0aGlzLmxpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlTGlrZUljb24oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY3JlYXRlIHRoZSB2YXJpYWJsZTogXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiXHJcbiAgICB0aGlzLmRlbGV0ZUJ1dHRvbiA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiKTtcclxuXHJcbiAgICAvL2FkZCB0aGUgZXZlbnQgbGlzdGVuZXJcclxuICAgIHRoaXMuZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrKHsgbmFtZTogdGhpcy5fbmFtZSwgbGluazogdGhpcy5fbGluayB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIFxyXG5cclxuICBcclxuXHJcbiAgX2hhbmRsZURlbGV0ZUNhcmQoKSB7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5yZW1vdmUoKTtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gbnVsbDtcclxuICB9XHJcbiAgX2hhbmRsZUxpa2VJY29uKCkge1xyXG4gICAgdGhpcy5saWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ1dHRvbl9hY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICBnZXRWaWV3KCkge1xyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnQgPSBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2VsZWN0b3IpXHJcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKVxyXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICAgIC8vIGdldCB0aGUgY2FyZCB2aWV3XHJcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpO1xyXG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LnNyYyA9IHRoaXMuX2xpbms7XHJcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQuYWx0ID0gdGhpcy5fbmFtZTtcclxuXHJcbiAgICB0aGlzLl90aXRsZUVsZW1lbnQgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpO1xyXG4gICAgdGhpcy5fdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcclxuXHJcbiAgICAvLyBzZXQgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIC8vIHJldHVybiB0aGUgY2FyZFxyXG4gICAgcmV0dXJuIHRoaXMuX2NhcmRFbGVtZW50O1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihjb25maWcsIGZvcm1FbGVtZW50KSB7XHJcbiAgICB0aGlzLl9mb3JtU2VsZWN0b3IgPSBjb25maWcuaW5wdXRTZWxlY3RvcjtcclxuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBjb25maWcuaW5wdXRTZWxlY3RvcjtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gY29uZmlnLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xyXG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IGNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gY29uZmlnLmlucHV0RXJyb3JDbGFzcztcclxuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBjb25maWcuZXJyb3JDbGFzcztcclxuXHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXHJcbiAgICApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXHJcbiAgICApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KSB7XHJcbiAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF90b2dnbGVCdXR0b25TdGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoKSkge1xyXG4gICAgICB0aGlzLmRpc2FibGVCdXR0b24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9oYXNJbnZhbGlkSW5wdXQoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuX2lucHV0RWxlbWVudHMuZXZlcnkoXHJcbiAgICAgIChpbnB1dEVsZW1lbnQpID0+IGlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2lucHV0RWxlbWVudHMgPSBbXHJcbiAgICAgIC4uLnRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvciksXHJcbiAgICBdO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3JcclxuICAgICk7XHJcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnRzLmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICByZXNldFZhbGlkYXRpb24oKSB7XHJcbiAgICAvL2NyZWF0ZXMgYSB2YXJpYWJsZSB0byB0aGUgaW5wdXQgbGlzdFxyXG4gICAgLy8gdGhpcyB2YXJpYWJsZSB3aWxsIHJlY2VpdmUgYSBsaXN0IG9mIGlucHV0cyBpbnNpZGUgdGhlIGZvcm0gZWxlbWVudC4gTlRTOiBZb3UgYWxyZWFkeSBoYXZlIGEgdmFyaWFibGUgZm9yIGZvcm1FbGVtZW50LCBzbyB5b3UgY2FuIHVzZSB0aGlzLl9mb3JtRWxlbWVudCArIHF1ZXJ5U2VsZWN0b3JBbGxcclxuXHJcbiAgICAvL25vdyB0aGF0IGEgbGlzdCBvZiBpbnB1dHMgaXMgc2V0IHVwLCBmb3JFYWNoIG9uZSBvZiB0aGVtLCBoaWRlSW5wdXRFcnJvclxyXG4gICAgdGhpcy5faW5wdXRFbGVtZW50cy5mb3JFYWNoKChpbnB1dCkgPT4gdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXQpKTtcclxuXHJcbiAgICAvLyBOVFM6IGFsc28sIHRvZ2dsZSB0aGUgc3VibWl0IGJ1dHRvbiAodGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKSlcclxuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlQnV0dG9uKCkge1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2UgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlbmVkXCIpO1xyXG5cclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVFc2NDbG9zZShldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbFwiKSB8fFxyXG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fY2xvc2VcIilcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQpIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XHJcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbF9faW5wdXRcIik7XHJcbiAgfVxyXG5cclxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHt9O1xyXG5cclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBpbnB1dFZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGlucHV0VmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRWYWx1ZXMoZGF0YSkge1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIGlmIChkYXRhW2lucHV0Lm5hbWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IGRhdGFbaW5wdXQubmFtZV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYE5vIGRhdGEgcHJvdmlkZWQgZm9yIGlucHV0IHdpdGggbmFtZTogJHtpbnB1dC5uYW1lfWApO1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9ybSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9mb3JtO1xyXG4gIH1cclxufVxyXG4iLCJcclxuXHJcbmNvbnN0IGluaXRpYWxDYXJkcyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcclxuICAgICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L3lvc2VtaXRlLmpwZ1wiLFxyXG4gICAgfSxcclxuICBcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGFrZS1sb3Vpc2UuanBnXCIsXHJcbiAgICB9LFxyXG4gIFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkJhbGQgTW91bnRhaW5zXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9iYWxkLW1vdW50YWlucy5qcGdcIixcclxuICAgIH0sXHJcbiAgXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTGF0ZW1hclwiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGF0ZW1hci5qcGdcIixcclxuICAgIH0sXHJcbiAgXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXHJcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC92YW5vaXNlLmpwZ1wiLFxyXG4gICAgfSxcclxuICBcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJMYWdvIGRpIEJyYWllc1wiLFxyXG4gICAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGFnby5qcGdcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgZm9ybVNlbGVjdG9yOiBcIi5tb2RhbF9fZm9ybVwiLFxyXG4gICAgaW5wdXRTZWxlY3RvcjogXCIubW9kYWxfX2lucHV0XCIsXHJcbiAgICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIubW9kYWxfX2J1dHRvblwiLFxyXG4gICAgaW5hY3RpdmVCdXR0b25DbGFzczogXCJtb2RhbF9fYnV0dG9uX2Rpc2FibGVkXCIsXHJcbiAgICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2lucHV0X3R5cGVfZXJyb3JcIixcclxuICAgIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yX3Zpc2libGVcIixcclxuICB9O1xyXG5cclxuICBleHBvcnQgeyBpbml0aWFsQ2FyZHMgfTtcclxuICBleHBvcnQgeyBjb25maWcgfTsiLCJpbXBvcnQgXCIuLi9wYWdlcy9pbmRleC5jc3NcIjtcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5cclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXAuanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcclxuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XHJcblxyXG5pbXBvcnQgeyBpbml0aWFsQ2FyZHMgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHMuanNcIjtcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzLmpzXCI7XHJcblxyXG5jb25zdCBjYXJkU2VjdGlvbiA9IG5ldyBTZWN0aW9uKFxyXG4gIHtcclxuICAgIGl0ZW1zOiBpbml0aWFsQ2FyZHMsXHJcbiAgICByZW5kZXJlcjogKGl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjcmVhdGVDYXJkKGl0ZW0pO1xyXG4gICAgICBjYXJkU2VjdGlvbi5hZGRJdGVtKGNhcmRFbGVtZW50KTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBcIi5jYXJkc19fbGlzdFwiXHJcbik7XHJcblxyXG5jb25zdCBwcm9maWxlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1lZGl0LWJ1dHRvblwiKTtcclxuXHJcbmNvbnN0IGhhbmRsZVBvcHVwV2l0aEZvcm0gPSBuZXcgUG9wdXBXaXRoRm9ybShcIiNwcm9maWxlLWVkaXQtbW9kYWxcIiwgKGRhdGEpID0+IHtcclxuICB1c2VySW5mby5zZXRVc2VySW5mbyh7XHJcbiAgICBuYW1lOiBkYXRhLnRpdGxlLFxyXG4gICAgam9iOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gIH0pO1xyXG4gIGhhbmRsZVBvcHVwV2l0aEZvcm0uY2xvc2UoKTtcclxufSk7XHJcblxyXG5oYW5kbGVQb3B1cFdpdGhGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5wcm9maWxlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGN1cnJlbnRVc2VyRGF0YSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XHJcbiAgaGFuZGxlUG9wdXBXaXRoRm9ybS5zZXRJbnB1dFZhbHVlcyh7XHJcbiAgICB0aXRsZTogY3VycmVudFVzZXJEYXRhLm5hbWUsXHJcbiAgICBkZXNjcmlwdGlvbjogY3VycmVudFVzZXJEYXRhLmpvYixcclxuICB9KTtcclxuICBoYW5kbGVQb3B1cFdpdGhGb3JtLm9wZW4oKTtcclxufSk7XHJcblxyXG5jb25zdCBhZGRDYXJkRm9ybSA9IGRvY3VtZW50LmZvcm1zW1wiQWRkLWEtTmV3LUNhcmRcIl07XHJcbmFkZENhcmRGb3JtLnJlc2V0KCk7XHJcblxyXG5jb25zdCBhZGRDYXJkV2l0aFBvcHVwRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKFwiI2FkZC1jYXJkLW1vZGFsXCIsIChkYXRhKSA9PiB7XHJcbiAgY2FyZFNlY3Rpb24uYWRkSXRlbShcclxuICAgIGNyZWF0ZUNhcmQoe1xyXG4gICAgICBuYW1lOiBkYXRhLnRpdGxlLFxyXG4gICAgICBsaW5rOiBkYXRhLnVybCxcclxuICAgIH0pXHJcbiAgKTtcclxuICBhZGRDYXJkV2l0aFBvcHVwRm9ybS5jbG9zZSgpO1xyXG4gIGFkZENhcmRGb3JtLnJlc2V0KCk7XHJcbiAgZm9ybVZhbGlkYXRvcnNbXCJBZGQtYS1OZXctQ2FyZFwiXS5kaXNhYmxlQnV0dG9uKCk7XHJcbn0pO1xyXG5hZGRDYXJkV2l0aFBvcHVwRm9ybS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgaGFuZGxlUG9wdXBXaXRoSW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoXCIjaW1hZ2UtcHJldmlldy1tb2RhbFwiKTtcclxuaGFuZGxlUG9wdXBXaXRoSW1hZ2Uuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcclxuICBuYW1lU2VsZWN0b3I6IFwiLnByb2ZpbGVfX3RpdGxlXCIsXHJcbiAgam9iU2VsZWN0b3I6IFwiLnByb2ZpbGVfX2Rlc2NyaXB0aW9uXCIsXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlSW1hZ2VDbGljayhkYXRhKSB7XHJcbiAgaGFuZGxlUG9wdXBXaXRoSW1hZ2Uub3Blbih7IG5hbWU6IGRhdGEubmFtZSwgbGluazogZGF0YS5saW5rIH0pO1xyXG59XHJcblxyXG5jb25zdCBjYXJkU2VsZWN0b3IgPSBcIiNjYXJkLXRlbXBsYXRlXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGRhdGEpIHtcclxuICBjb25zdCBjYXJkID0gbmV3IENhcmQoZGF0YSwgXCIjY2FyZC10ZW1wbGF0ZVwiLCBoYW5kbGVJbWFnZUNsaWNrKTtcclxuICByZXR1cm4gY2FyZC5nZXRWaWV3KCk7XHJcbn1cclxuXHJcbmNhcmRTZWN0aW9uLnJlbmRlckl0ZW1zKCk7XHJcblxyXG4vLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzLCBoYW5kbGUgaW5pdGlhbGl6YXRpb24sIGV0Yy5cclxuXHJcbmNvbnN0IHByb2ZpbGVFZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2ZpbGUtZWRpdC1tb2RhbFwiKTtcclxuXHJcbmNvbnN0IHByZXZpZXdJbWFnZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZS1wcmV2aWV3LW1vZGFsXCIpO1xyXG5jb25zdCBwcmV2aWV3SW1hZ2VFbGVtZW50ID0gcHJldmlld0ltYWdlTW9kYWwucXVlcnlTZWxlY3RvcihcclxuICBcIi5tb2RhbF9fcHJldmlldy1pbWFnZVwiXHJcbik7XHJcbmNvbnN0IHByZXZpZXdNb2RhbENhcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jYXB0aW9uXCIpO1xyXG5cclxuY29uc3QgcHJldmlld01vZGFsQ2xvc2VCdXR0b24gPVxyXG4gIHByZXZpZXdJbWFnZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Nsb3NlXCIpO1xyXG5cclxuLy8gZGVmaW5lIGFuIG9iamVjdCBmb3Igc3RvcmluZyB2YWxpZGF0b3JzXHJcbmNvbnN0IGZvcm1WYWxpZGF0b3JzID0ge307XHJcblxyXG5jb25zdCBlbmFibGVWYWxpZGF0aW9uID0gKGNvbmZpZykgPT4ge1xyXG4gIGNvbnN0IGZvcm1MaXN0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy5mb3JtU2VsZWN0b3IpKTtcclxuICBmb3JtTGlzdC5mb3JFYWNoKChmb3JtRWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBmb3JtRWxlbWVudCk7XHJcbiAgICAvLyBIZXJlIHlvdSBnZXQgdGhlIG5hbWUgb2YgdGhlIGZvcm0gKGlmIHlvdSBkb27igJl0IGhhdmUgaXQgdGhlbiB5b3UgbmVlZCB0byBhZGQgaXQgaW50byBlYWNoIGZvcm0gaW4gYGluZGV4Lmh0bWxgIGZpcnN0KVxyXG4gICAgY29uc3QgZm9ybU5hbWUgPSBmb3JtRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpO1xyXG5cclxuICAgIC8vIEhlcmUgeW91IHN0b3JlIHRoZSB2YWxpZGF0b3IgdXNpbmcgdGhlIGBuYW1lYCBvZiB0aGUgZm9ybVxyXG4gICAgZm9ybVZhbGlkYXRvcnNbZm9ybU5hbWVdID0gdmFsaWRhdG9yO1xyXG4gICAgdmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuICB9KTtcclxufTtcclxuXHJcbmVuYWJsZVZhbGlkYXRpb24oY29uZmlnKTtcclxuXHJcbi8vIG9yIHlvdSBjYW4gdXNlIGEgc3RyaW5nIOKAkyB0aGUgbmFtZSBvZiB0aGUgZm9ybSAoeW91IGtub3cgaXQgZnJvbSBgaW5kZXguaHRtbGApXHJcblxyXG4vLyBXcmFwcGVycyAvL1xyXG5jb25zdCBjYXJkc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19saXN0XCIpO1xyXG5cclxuY29uc3QgYWRkQ2FyZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1tb2RhbFwiKTtcclxuY29uc3QgYWRkQ2FyZEZvcm1FbGVtZW50ID0gYWRkQ2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XHJcblxyXG4vLyBCdXR0b25zIGFuZCBvdGhlciBET00gTm9kZXMgLy9cclxuY29uc3QgYWRkQ2FyZE1vZGFsQ2xvc2VCdXR0b24gPSBhZGRDYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2VcIik7XHJcbmNvbnN0IGFkZE5ld0NhcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XHJcblxyXG5jb25zdCBjYXJkVGl0bGVJbnB1dCA9IGFkZENhcmRGb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLWZvcm1cIik7XHJcbmNvbnN0IGNhcmRVcmxJbnB1dCA9IGFkZENhcmRGb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC11cmxcIik7XHJcblxyXG4vLyBMb2dpYyB0byBzdWJtaXQgdGhlIGNhcmQgZ29lcyBoZXJlXHJcbi8vIEFzc3VtaW5nIGl0IGlzIGFuIGFzeW5jaHJvbm91cyBvcGVyYXRpb25cclxuXHJcbi8vIHRoaXMuc3VibWl0Q2FyZERhdGEoKVxyXG4vLyAgIC50aGVuKCgpID0+IHtcclxuLy8gICAgIC8vIE9ubHkgcmVzZXQgdGhlIGZvcm0gYWZ0ZXIgc3VjY2Vzc2Z1bCBzdWJtaXNzaW9uXHJcbi8vICAgICB0aGlzLl9mb3JtLnJlc2V0KCk7XHJcbi8vICAgICB0aGlzLmNsb3NlKCk7XHJcbi8vICAgfSlcclxuLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmVycm9yKFwiU3VibWlzc2lvbiBmYWlsZWQ6XCIsIGVycm9yKTtcclxuLy8gICAgIC8vIEhhbmRsZSBzdWJtaXNzaW9uIGVycm9yXHJcbi8vICAgfSk7XHJcblxyXG4vLyBBZGRpbmcgYSBOZXcgQ2FyZCAvL1xyXG5cclxuYWRkTmV3Q2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWRkQ2FyZFdpdGhQb3B1cEZvcm0ub3BlbigpKTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgc2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICByZW5kZXJJdGVtcygpIHtcclxuICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHRoaXMuX3JlbmRlcmVyKGl0ZW0pKTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19wcmV2aWV3LWltYWdlXCIpO1xyXG4gICAgdGhpcy5fY2FwdGlvbkVsZW1lbnQgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jYXB0aW9uXCIpO1xyXG4gIH1cclxuXHJcbiAgb3Blbih7IG5hbWUsIGxpbmsgfSkge1xyXG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LnNyYyA9IGxpbms7XHJcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQuYWx0ID0gbmFtZTtcclxuICAgIHRoaXMuX2NhcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm9yIHtcclxuICBjb25zdHJ1Y3Rvcih7IG5hbWVTZWxlY3Rvciwgam9iU2VsZWN0b3IgfSkge1xyXG4gICAgdGhpcy5fbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWVTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9qb2JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihqb2JTZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWU6IHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50LFxyXG4gICAgICBqb2I6IHRoaXMuX2pvYkVsZW1lbnQudGV4dENvbnRlbnQsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlckluZm8oeyBuYW1lLCBqb2IgfSkge1xyXG4gICAgdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgdGhpcy5fam9iRWxlbWVudC50ZXh0Q29udGVudCA9IGpvYjtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNhcmQiLCJjb25zdHJ1Y3RvciIsIl9yZWYiLCJjYXJkU2VsZWN0b3IiLCJoYW5kbGVJbWFnZUNsaWNrIiwibmFtZSIsImxpbmsiLCJ0aGlzIiwiX25hbWUiLCJfbGluayIsIl9jYXJkU2VsZWN0b3IiLCJfaGFuZGxlSW1hZ2VDbGljayIsIl9zZXRFdmVudExpc3RlbmVycyIsImxpa2VCdXR0b24iLCJfY2FyZEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVMaWtlSWNvbiIsImRlbGV0ZUJ1dHRvbiIsIl9oYW5kbGVEZWxldGVDYXJkIiwiX2ltYWdlRWxlbWVudCIsInJlbW92ZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImdldFZpZXciLCJkb2N1bWVudCIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJzcmMiLCJhbHQiLCJfdGl0bGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJGb3JtVmFsaWRhdG9yIiwiY29uZmlnIiwiZm9ybUVsZW1lbnQiLCJfZm9ybVNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9pbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2Zvcm1FbGVtZW50IiwiX3Nob3dJbnB1dEVycm9yIiwiaW5wdXRFbGVtZW50IiwiZXJyb3JFbGVtZW50IiwiaWQiLCJhZGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlSW5wdXRFcnJvciIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwiX2hhc0ludmFsaWRJbnB1dCIsImRpc2FibGVCdXR0b24iLCJfc3VibWl0QnV0dG9uIiwiZGlzYWJsZWQiLCJfaW5wdXRFbGVtZW50cyIsImV2ZXJ5IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlIiwiZW5hYmxlVmFsaWRhdGlvbiIsImV2dCIsInByZXZlbnREZWZhdWx0IiwicmVzZXRWYWxpZGF0aW9uIiwiaW5wdXQiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXAiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwib3BlbiIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5Iiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJ0YXJnZXQiLCJjb250YWlucyIsIlBvcHVwV2l0aEZvcm0iLCJoYW5kbGVGb3JtU3VibWl0Iiwic3VwZXIiLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9mb3JtIiwiX2lucHV0TGlzdCIsIl9nZXRJbnB1dFZhbHVlcyIsImlucHV0VmFsdWVzIiwidmFsdWUiLCJzZXRJbnB1dFZhbHVlcyIsImRhdGEiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiZ2V0Rm9ybSIsImNhcmRTZWN0aW9uIiwic2VsZWN0b3IiLCJpdGVtcyIsInJlbmRlcmVyIiwiX2l0ZW1zIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsInJlbmRlckl0ZW1zIiwiaXRlbSIsImFkZEl0ZW0iLCJlbGVtZW50IiwicHJlcGVuZCIsImNhcmRFbGVtZW50IiwiY3JlYXRlQ2FyZCIsInByb2ZpbGVFZGl0QnV0dG9uIiwiaGFuZGxlUG9wdXBXaXRoRm9ybSIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJ0aXRsZSIsImpvYiIsImRlc2NyaXB0aW9uIiwiY3VycmVudFVzZXJEYXRhIiwiZ2V0VXNlckluZm8iLCJhZGRDYXJkRm9ybSIsImZvcm1zIiwicmVzZXQiLCJhZGRDYXJkV2l0aFBvcHVwRm9ybSIsInVybCIsImZvcm1WYWxpZGF0b3JzIiwiaGFuZGxlUG9wdXBXaXRoSW1hZ2UiLCJfY2FwdGlvbkVsZW1lbnQiLCJuYW1lU2VsZWN0b3IiLCJqb2JTZWxlY3RvciIsIl9uYW1lRWxlbWVudCIsIl9qb2JFbGVtZW50IiwiX3JlZjIiLCJwcmV2aWV3SW1hZ2VNb2RhbCIsImZvcm1TZWxlY3RvciIsIkFycmF5IiwiZnJvbSIsInZhbGlkYXRvciIsImZvcm1OYW1lIiwiZ2V0QXR0cmlidXRlIiwiYWRkQ2FyZE1vZGFsIiwiYWRkQ2FyZEZvcm1FbGVtZW50IiwiYWRkTmV3Q2FyZEJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=