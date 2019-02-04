# Medunten

[![appveyor](https://img.shields.io/appveyor/tests/maman/medunten.svg?style=flat-square&label=Windows)](https://ci.appveyor.com/project/maman/medunten) [![travis](https://img.shields.io/travis/tests/maman/medunten.svg?style=flat-square&label=Mac%20OSX%20%26%20Linux)](https://travis-ci.org/maman/medunten) [![npm](https://img.shields.io/npm/v/@maman/medunten.svg)](https://www.npmjs.com/package/@maman/medunten)

Mentranslasi bahasa indonesia ke bahasa madura (baik madura kasar, halus, atau super halus 👍) - atau sebaliknya. Menggunakan API dari situs web https://terjemahan.madura.web.id/

## API

#### `translate`

```ts
translate(string, {?tingkat: Tingkat, ?arah: Arah}): <Promise>
```

#### `Tingkat`

```ts
Tingkat.enjeLyah // kasar
Tingkat.engghiEnten // halus
Tingkat.engghiBunthen // super halus

/*atau, bisa juga seperti ini*/

1 // kasar
2 // halus
3 // super halus
```

#### `Arah`

```ts
Arah.indMad // indonesia - madura
Arah.madInd // madura - indonesia

/*atau, bisa juga seperti ini*/

'indonesia-madura'
'madura-indonesia'
```

## Contoh

```js
import translate, {Arah, Tingkat} from '@maman/medunten';

translate('masuk').then(result => {
  console.log(result); // 'lebbhu'
});

translate('masuk', {tingkat: 3}).then(result => {
  console.log(result); // 'malebbhet'
});

translate('malebbhet', {tingkat: Tingkat.engghiBhunten}).then(result => {
  console.log(result); // 'masuk'
});
```