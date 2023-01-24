import { OAIPMH, OAIPMHParser } from "oai_pmh_v2";

const oaiPmh = new OAIPMH(new OAIPMHParser(), {
  baseUrl:
    "http://bibliotecavirtual.asturias.es/i18n/oai/oai_bibliotecavirtual.asturias.es.cmd",
});

const info = await oaiPmh.identify({ signal: AbortSignal.timeout(20000) });

console.log(info);
