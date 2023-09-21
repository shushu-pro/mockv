import { integer, random, string, text } from '..';

let Provinces: CnAreaData = null;

function loadCnAreaData(cnAreaData: CnAreaData) {
  Provinces = cnAreaData;
}

function getProvinces() {
  if (Provinces) {
    return Provinces;
  }

  return [
    {
      code: string(2, 'number'),
      name: `${text(2)}省`,
      children: null,
    },
  ];
}

function getCitys() {
  if (Provinces) {
    return random(getProvinces()).children;
  }
  return [
    {
      code: string(4, 'number'),
      name: `${text(random(3, 5))}市`,
      children: null,
    },
  ];
}

function getCountrys() {
  if (Provinces) {
    return random(random(getProvinces()).children).children;
  }
  return [
    {
      code: string(6, 'number'),
      name: `${text(random(3, 5))}县`,
    },
  ];
}

function province(type: 'text' | 'code' | 'data' = 'text') {
  const province = random(getProvinces());

  if (type === 'text') {
    return province.name;
  }

  if (type === 'code') {
    return province.code;
  }

  return { code: province.code, name: province.name };
}

function city(type: 'text' | 'code' | 'data' = 'text') {
  const city = random(getCitys());

  if (type === 'text') {
    return city.name;
  }

  if (type === 'code') {
    return city.code;
  }

  return { code: city.code, name: city.name };
}

function fullCity(type: 'text' | 'code' | 'data' | 'textArray' = 'text') {
  const province = random(getProvinces());
  const city = random(province.children || getCitys());

  if (type === 'text') {
    return province.name + city.name;
  }

  if (type === 'code') {
    return [province.code, city.code];
  }

  if (type === 'data') {
    return [province, city];
  }

  return [province.name, city.name];
}

function country(type: 'text' | 'code' | 'data' = 'text') {
  const province = random(getProvinces());
  const city = random(province.children || getCitys());
  const country = random(city.children || getCountrys());

  if (type === 'text') {
    return country.name;
  }

  if (type === 'code') {
    return country.code;
  }

  return { code: country.code, name: country.name };
}

function fullCountry(type: 'text' | 'code' | 'data' | 'textArray' = 'text') {
  const province = random(getProvinces());
  const city = random(province.children || getCitys());
  const country = random(city.children || getCountrys());

  if (type === 'text') {
    return province.name + city.name + country.name;
  }

  if (type === 'code') {
    return [province.code, city.code, country.code];
  }

  if (type === 'data') {
    return [
      { code: province.code, name: province.name },
      { code: city.code, name: city.name },
      { code: country.code, name: country.name },
    ];
  }

  return [province.name, city.name, country.name];
}

function street() {
  return `${text(2)}路${integer(1000)}号`;
}

function fullStreet() {
  return fullCountry() + street();
}

function zip() {
  return string(6, 'number');
}

export type CnAreaData = Array<{
  code: string;
  name: string;
  children: Array<{
    code: string;
    name: string;
    children: Array<{
      code: string;
      name: string;
    }>;
  }>;
}>;

export {
  city,
  country,
  fullCity,
  fullCountry,
  fullStreet,
  loadCnAreaData,
  province,
  street,
  zip,
};
