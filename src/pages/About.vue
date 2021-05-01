<template>
  <div class="main-padding main-box-shadow">
    <div id="about">
      <h2>About</h2>
      <p>
        Kanji Hodgepodge is an online kanji dictionary made by combining data of
        a variety of sources. This site is still in early development.
      </p>
      <h3>Sources:</h3>
      <p>
        On-readings, kun-readings, meanings, nanori, kanji variants, radicals,
        grade and kanji's frequency rank in newspapers are taken from
        <a href="http://www.edrdg.org/wiki/index.php/KANJIDIC_Project"
          >KANJIDIC2</a
        >. However, only kanji variants that have actual entries in KANJIDIC2
        and are also defined in the Unihan Database (see below) were kept.
        Following changes have been applied to readings:
      </p>
      <ol>
        <li>
          Kun-readings that are verbalized on-readings (combinations with suru,
          zuru, jiru, taru or su) have been removed.
        </li>
        <li>
          Kun-readings that are nominalized and/or rendaku variations of
          existing kun-readings haven been removed.
        </li>
        <li>All hyphens have been removed.</li>
      </ol>
      <p>
        Jōyō data can be found in the PDF files published on the
        website of the
        <a
          href="https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/kanji/index.html"
          >Agency for Cultural Affairs (文化省)</a
        >.
      </p>
      <p>
        Stroke order diagrams are from Ulrich Apel's
        <a href="https://kanjivg.tagaini.net/">KanjiVG</a>.
      </p>
      <p>
        Data on traditional and simplified variants as well as stroke counts are
        taken from Unicode's
        <a href="https://unicode.org/charts/unihan.html">Unihan Database</a>.
        Variants that aren't also defined in KANJIDIC2 have been ignored. This
        was done to ensure that only variants that are considered as such in
        Japanese are included and not, for example, simplified Chinese
        characters. They are supplemented with variants defined in the jōyō
        kanji list.
      </p>
      <p>
        On-reading types (go'on, kan'on etc.) are taken, with a few minor
        adjustments for normalization, from
        <a href="https://ja.wiktionary.org/">ja.wiktionary.org</a>. To see the
        original data and its authors, simply go to the article of the
        respective kanji, e.g.
        <a href="https://ja.wiktionary.org/wiki/%E5%AD%97"
          >ja.wiktionary.org/wiki/字</a
        >
        for 字.
      </p>
      <p>
        Vocabulary has been extracted from
        <a
          href="http://www.edrdg.org/wiki/index.php/Main_Page#The_JMdict.2FwEDICT_Project"
          >JMdict</a
        >. The frequency numbers which are used to sort the vocabulary lists are
        taken from <a href="https://pypi.org/project/wordfreq/">wordfreq</a>.
      </p>
      <p>
        The component based lookup tool uses the data from the EDRDG's
        <a href="http://www.edrdg.org/krad/kradinf.html">KRADFILE</a>.
      </p>
      <h3>Licenses:</h3>
      <h4>KANJIDIC2, JMdict, KRADFILE</h4>
      <p>
        KANJIDIC2, JMdict and KRADFILE are the property of the Electronic
        Dictionary Research and Development Group. The files are made available
        under a Creative Commons Attribution-ShareAlike Licence (V3.0). For some
        portions of the KANJIDIC2 special conditions apply (see the
        <a href="http://www.edrdg.org/edrdg/licence.html"
          >EDRDG's General Dictionary License Statement</a
        >
        under 7. Special Conditions for the KANJIDIC, KANJD212 and KANJIDIC2
        Files), but these portions are currently not part of this project.
      </p>
      <collapsible-box title="CC BY-SA 3.0">
        <LicenseCcBySa3 />
      </collapsible-box>
      <h4>Wiktionary</h4>
      <p>
        On-reading type information is based on the articles of the respective
        kanji from the
        <a href="https://ja.wikipedia.org/wiki/">Japanese Wiktionary</a>, which
        are released under the Creative Commons Attribution-Share-Alike License
        3.0
      </p>
      <collapsible-box title="CC BY-SA 3.0">
        <LicenseCcBySa3 />
      </collapsible-box>
      <h4>KanjiVG</h4>
      <p>
        KanjiVG is copyright © 2009-2018 Ulrich Apel and released under the
        Creative Commons Attribution-Share Alike 3.0 license.
      </p>
      <collapsible-box title="CC BY-SA 3.0">
        <LicenseCcBySa3 />
      </collapsible-box>
      <h4>Unihan</h4>
      <p>Copyright © 1991-2021 Unicode, Inc. All rights reserved.</p>
      <collapsible-box title="UNICODE, INC. LICENSE AGREEMENT - DATA FILES AND SOFTWARE">
        <LicenseUnicode />
      </collapsible-box>
      <h4>wordfreq</h4>
      <p>
        For the licenses of the data that wordfreq is based on, see under
        License on
        <a href="https://pypi.org/project/wordfreq/"
          >wordfreq's page on pypi.org</a
        >.
      </p>
      <collapsible-box title="MIT License">
        <LicenseMit copyrightDate="2015" copyrightHolder="Luminoso Technologies, Inc." />
      </collapsible-box>
    </div>
  </div>
</template>

<script>
import CollapsibleBox from "@/components/CollapsibleBox";
import LicenseCcBySa3 from "@/components/LicenseCcBySa3";
import LicenseMit from "@/components/LicenseMit";
import LicenseUnicode from "@/components/LicenseUnicode";

export default {
  components: {
    CollapsibleBox,
    LicenseCcBySa3,
    LicenseMit,
    LicenseUnicode,
  },
};
</script>

<style></style>
