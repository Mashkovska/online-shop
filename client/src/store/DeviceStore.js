import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфони" },
      { id: 3, name: "Ноутбуки" },
      { id: 4, name: "Телевізори" },
    ];

    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Lenovo" },
      { id: 4, name: "Asus" },
    ];

    this._devices = [
      {
        id: 3,
        name: "12 pro",
        price: 1000,
        rating: 0,
        img: "f1c98852-8326-4cff-ac34-09d117b6c742.jpg",
        typeId: 2,
        brandId: 4,
      },
      {
        id: 4,
        name: "12 pro ",
        price: 350,
        rating: 0,
        img: "0898f602-d50a-42c0-b541-f247df97ce42.jpg",
        typeId: 1,
        brandId: 1,
      },
      {
        id: 5,
        name: "a52",
        price: 350,
        rating: 0,
        img: "3b5fa616-74fb-4b65-9781-3c8c97881e48.jpg",
        typeId: 2,
        brandId: 1,
      },
      {
        id: 6,
        name: "ideapad 3",
        price: 700,
        rating: 0,
        img: "3808a1c5-6f58-44d1-8d38-c2502548bf03.jpg",
        typeId: 2,
        brandId: 1,
      },
      {
        id: 7,
        name: "ideapad 3",
        price: 700,
        rating: 0,
        img: "3808a1c5-6f58-44d1-8d38-c2502548bf03.jpg",
        typeId: 2,
        brandId: 1,
      },
    ];

    this._selectedType = {};
    this._selectedBrand = {};

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
