import translate, { Tingkat, Arah, queryBuilder } from '../../lib/translate';

const INDO_STRING = 'masuk';
const MADURA_STRING = 'lebbhu';
const MADURA_STRING_2 = `maso'`;
const MADURA_STRING_3 = 'malebbhet';

describe('Query building test', () => {
  it(`defaults to 'enje-Lyah' if 'tingkat' param isn't specified`, () => {
    const query = queryBuilder({arah: Arah.madInd });
    expect(query.tingkat).toBe(Tingkat.enjeLyah);
    expect(query.arah).toBe(Arah.madInd);
  });

  it(`defaults to indonesia-madura if 'arah' param isn't specified`, () => {
    const query = queryBuilder({tingkat: Tingkat.engghiBunthen });
    expect(query.tingkat).toBe(Tingkat.engghiBunthen);
    expect(query.arah).toBe(Arah.indMad);
  });

  it(`defaults to 'enje-Lyah' and indonesia-madura if both 'tingkat' and 'arah' params aren't specified`, () => {
    const query = queryBuilder();
    expect(query.tingkat).toBe(Tingkat.enjeLyah);
    expect(query.arah).toBe(Arah.indMad);
  });
});

describe(`Basic translation`, () => {
  it('can translate indonesian to madurese', async () => {
    const result = await translate(INDO_STRING, {
      arah: Arah.indMad
    });
    expect(result).toBeTruthy();
    expect(result).toBe(MADURA_STRING);
  });
  
  it('can translate madurese to indonesian', async () => {
    const result = await translate(MADURA_STRING, {
      arah: Arah.madInd
    });
    expect(result).toBeTruthy();
    expect(result).toBe(INDO_STRING);
  });

  it(`throw error if kalimat isn't specified`, () => {
    expect(() => {
      // @ts-ignore
      translate('', { arah: Arah.madInd })
    }).toThrowError(`Kalimat tidak boleh kosong`);
  });
});

describe(`Translate with 'tingkat'`, () => {
  it(`can translate indonesian to enje'-lyah madurese`, async () => {
    const result = await translate(INDO_STRING, {
      arah: Arah.indMad,
      tingkat: Tingkat.enjeLyah,
    });
    expect(result).toBeTruthy();
    expect(result).toBe(MADURA_STRING);
  });
  
  it(`can translate indonesian to engghi-enten madurese`, async () => {
    const result = await translate(INDO_STRING, {
      arah: Arah.indMad,
      tingkat: Tingkat.engghiEnten,
    });
    expect(result).toBeTruthy();
    expect(result).toBe(MADURA_STRING_2);
  });
  
  it(`can translate indonesian to engghi-bhunten madurese`, async () => {
    const result = await translate(INDO_STRING, {
      arah: Arah.indMad,
      tingkat: Tingkat.engghiBunthen,
    });
    expect(result).toBeTruthy();
    expect(result).toBe(MADURA_STRING_3);
  });
});
