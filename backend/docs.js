const planetsDoc = [
  {
    rowid: "ID único da linha no conjunto de dados.",
    pl_name: "Nome do planeta, mais comumente usado na literatura.",
    hostname: "Nome da estrela hospedeira do sistema planetário.",
    pl_letter: "Letra atribuída ao planeta dentro de seu sistema.",
    hd_name: "ID da estrela no Catálogo de Henry Draper.",
    hip_name: "ID da estrela no Catálogo Hipparcos.",
    tic_id: "ID da estrela no Catálogo de Entrada TESS.",
    gaia_id: "ID da estrela no Catálogo Gaia.",
    sy_snum: "Número de estrelas no sistema planetário.",
    sy_pnum: "Número de planetas confirmados no sistema planetário.",
    sy_mnum: "Número de luas no sistema planetário.",
    cb_flag:
      "Flag indicando se o planeta orbita um sistema binário (1 = sim, 0 = não).",
    discoverymethod:
      "Método pelo qual o planeta foi inicialmente identificado.",
    disc_year: "Ano em que o planeta foi descoberto.",
    disc_refname:
      "Nome da referência da publicação onde a descoberta é detalhada.",
    disc_pubdate: "Data de publicação da descoberta.",
    disc_locale:
      "Localização da observação da descoberta do planeta (Terra ou Espaço).",
    disc_facility: "Nome da instalação onde a descoberta foi realizada.",
    disc_telescope: "Nome do telescópio utilizado na descoberta.",
    disc_instrument: "Nome do instrumento utilizado na descoberta.",
    rv_flag:
      "Flag indicando se a estrela hospedeira exibe variações de velocidade radial devido ao planeta (1 = sim, 0 = não).",
    pul_flag:
      "Flag indicando se a estrela hospedeira exibe variações de tempo de pulsar devido ao planeta (1 = sim, 0 = não).",
    ptv_flag:
      "Flag indicando se a estrela hospedeira exibe variações de tempo de pulsação devido ao planeta (1 = sim, 0 = não).",
    tran_flag:
      "Flag indicando se o planeta transita sua estrela hospedeira (1 = sim, 0 = não).",
    ast_flag:
      "Flag indicando se a estrela hospedeira exibe variações astrométricas devido ao planeta (1 = sim, 0 = não).",
    obm_flag:
      "Flag indicando se o planeta exibe modulações de brilho orbital (1 = sim, 0 = não).",
    micro_flag:
      "Flag indicando se o sistema planetário atuou como lente em um evento de microlente observado (1 = sim, 0 = não).",
    etv_flag:
      "Flag indicando se um planeta circumbinário que orbita uma binária eclipsante induz variações de tempo de eclipses (ETVs) na dupla (1 = sim, 0 = não).",
    ima_flag:
      "Flag indicando se o planeta foi observado por meio de técnicas de imagem (1 = sim, 0 = não).",
    dkin_flag:
      "Flag indicando se a presença do planeta foi inferida devido à sua influência cinemática no disco protoplanetário da estrela hospedeira (1 = sim, 0 = não).",
    pl_controv_flag:
      "Flag indicando se o status de confirmação de um planeta foi questionado na literatura publicada (1 = sim, 0 = não).",
    pl_orbper:
      "Período orbital em dias (tempo que o planeta leva para completar uma órbita ao redor da estrela hospedeira).",
    pl_orbpererr1: "Erro positivo do período orbital.",
    pl_orbpererr2: "Erro negativo do período orbital.",
    pl_orbperlim: "Limite do período orbital.",
    pl_orbper_reflink: "Referência do período orbital.",
    pl_orbsmax: "Eixo semi-maior da órbita em unidades astronômicas (au).",
    pl_orbsmaxerr1: "Erro positivo do eixo semi-maior.",
    pl_orbsmaxerr2: "Erro negativo do eixo semi-maior.",
    pl_orbsmaxlim: "Limite do eixo semi-maior.",
    pl_orbsmax_reflink: "Referência do eixo semi-maior.",
    pl_angsep: "Separação angular em milissegundos de arco (mas).",
    pl_angseperr1: "Erro positivo da separação angular.",
    pl_angseperr2: "Erro negativo da separação angular.",
    pl_angseplim: "Limite da separação angular.",
    pl_angsep_reflink: "Referência da separação angular.",
    pl_rade: "Raio do planeta em raios da Terra.",
    pl_radeerr1: "Erro positivo do raio do planeta.",
    pl_radeerr2: "Erro negativo do raio do planeta.",
    pl_radelim: "Limite do raio do planeta.",
    pl_rade_reflink: "Referência do raio do planeta.",
    pl_radj: "Raio do planeta em raios de Júpiter.",
    pl_radjerr1: "Erro positivo do raio do planeta em raios de Júpiter.",
    pl_radjerr2: "Erro negativo do raio do planeta em raios de Júpiter.",
    pl_radjlim: "Limite do raio do planeta em raios de Júpiter.",
    pl_radj_reflink: "Referência do raio do planeta em raios de Júpiter.",
    pl_bmasse: "Massa do planeta em massas da Terra.",
    pl_bmasseerr1: "Erro positivo da massa do planeta.",
    pl_bmasseerr2: "Erro negativo da massa do planeta.",
    pl_bmasselim: "Limite da massa do planeta.",
    pl_bmasse_reflink: "Referência da massa do planeta.",
    pl_bmassj: "Massa do planeta em massas de Júpiter.",
    pl_bmassjerr1: "Erro positivo da massa do planeta em massas de Júpiter.",
    pl_bmassjerr2: "Erro negativo da massa do planeta em massas de Júpiter.",
    pl_bmassjlim: "Limite da massa do planeta em massas de Júpiter.",
    pl_bmassj_reflink: "Referência da massa do planeta em massas de Júpiter.",
    pl_bmassprov: "Proveniência da medição da melhor massa.",
    pl_dens: "Densidade do planeta em g/cm³.",
    pl_denserr1: "Erro positivo da densidade do planeta.",
    pl_denserr2: "Erro negativo da densidade do planeta.",
    pl_denslim: "Limite da densidade do planeta.",
    pl_dens_reflink: "Referência da densidade do planeta.",
    pl_orbeccen: "Excentricidade da órbita do planeta.",
    pl_orbeccenerr1: "Erro positivo da excentricidade.",
    pl_orbeccenerr2: "Erro negativo da excentricidade.",
    pl_orbeccenlim: "Limite da excentricidade.",
    pl_orbeccen_reflink: "Referência da excentricidade.",
    pl_insol: "Fluxo de Insolação relativo ao fluxo da Terra.",
    pl_insolerr1: "Erro positivo do fluxo de insolações.",
    pl_insolerr2: "Erro negativo do fluxo de insolações.",
    pl_insollim: "Limite do fluxo de insolações.",
    pl_insol_reflink: "Referência do fluxo de insolações.",
    pl_eqt: "Temperatura de equilíbrio do planeta em Kelvin.",
    pl_eqterr1: "Erro positivo da temperatura de equilíbrio.",
    pl_eqterr2: "Erro negativo da temperatura de equilíbrio.",
    pl_eqtlim: "Limite da temperatura de equilíbrio.",
    pl_eqt_reflink: "Referência da temperatura de equilíbrio.",
    pl_orbincl: "Inclinação da órbita em graus.",
    pl_orbinclerr1: "Erro positivo da inclinação.",
    pl_orbinclerr2: "Erro negativo da inclinação.",
    pl_orbincllim: "Limite da inclinação.",
    pl_orbincl_reflink: "Referência da inclinação.",
    pl_tranmid: "Momento do trânsito em dias.",
    pl_tranmiderr1: "Erro positivo do momento do trânsito.",
    pl_tranmiderr2: "Erro negativo do momento do trânsito.",
    pl_tranmidlim: "Limite do momento do trânsito.",
    pl_tranmid_systemref: "Referência do sistema de tempo.",
    pl_tranmid_reflink: "Referência do momento do trânsito.",
    ttv_flag:
      "Flag indicando se a órbita do planeta exibe variações de tempo de trânsito de outro planeta no sistema (1 = sim, 0 = não).",
    pl_imppar: "Parâmetro de impacto.",
    pl_impparerr1: "Erro positivo do parâmetro de impacto.",
    pl_impparerr2: "Erro negativo do parâmetro de impacto.",
    pl_impparlim: "Limite do parâmetro de impacto.",
    pl_imppar_reflink: "Referência do parâmetro de impacto.",
    pl_trandep: "Profundidade do trânsito em porcentagem.",
    pl_trandeperr1: "Erro positivo da profundidade do trânsito.",
    pl_trandeperr2: "Erro negativo da profundidade do trânsito.",
    pl_trandeplim: "Limite da profundidade do trânsito.",
    pl_trandep_reflink: "Referência da profundidade do trânsito.",
    pl_trandur: "Duração do trânsito em horas.",
    pl_trandurerr1: "Erro positivo da duração do trânsito.",
    pl_trandurerr2: "Erro negativo da duração do trânsito.",
    pl_trandurlim: "Limite da duração do trânsito.",
    pl_trandur_reflink: "Referência da duração do trânsito.",
    pl_ratdor: "Razão do semi-eixo maior ao raio da estrela.",
    pl_ratdorerr1:
      "Erro positivo da razão do semi-eixo maior ao raio da estrela.",
    pl_ratdorerr2:
      "Erro negativo da razão do semi-eixo maior ao raio da estrela.",
    pl_ratdorlim: "Limite da razão do semi-eixo maior ao raio da estrela.",
    pl_ratdor_reflink:
      "Referência da razão do semi-eixo maior ao raio da estrela.",
    pl_ratror: "Razão do raio do planeta ao raio da estrela.",
    pl_ratrorerr1:
      "Erro positivo da razão do raio do planeta ao raio da estrela.",
    pl_ratrorerr2:
      "Erro negativo da razão do raio do planeta ao raio da estrela.",
    pl_ratrorlim: "Limite da razão do raio do planeta ao raio da estrela.",
    pl_ratror_reflink:
      "Referência da razão do raio do planeta ao raio da estrela.",
    pl_occdep: "Profundidade de ocultação em porcentagem.",
    pl_occdeperr1: "Erro positivo da profundidade de ocultação.",
    pl_occdeperr2: "Erro negativo da profundidade de ocultação.",
    pl_occdeplim: "Limite da profundidade de ocultação.",
    pl_occdep_reflink: "Referência da profundidade de ocultação.",
    pl_orbtper: "Época do periastron em graus.",
    pl_orbtpererr1: "Erro positivo da época do periastron.",
    pl_orbtpererr2: "Erro negativo da época do periastron.",
    pl_orbtperlim: "Limite da época do periastron.",
    pl_orbtper_reflink: "Referência da época do periastron.",
    pl_orblper: "Argumento do periastron em graus.",
    pl_orblpererr1: "Erro positivo do argumento do periastron.",
    pl_orblpererr2: "Erro negativo do argumento do periastron.",
    pl_orblperlim: "Limite do argumento do periastron.",
    pl_orblper_reflink: "Referência do argumento do periastron.",
    pl_rvamp: "Amplitude de velocidade radial em m/s.",
    pl_rvamperr1: "Erro positivo da amplitude de velocidade radial.",
    pl_rvamperr2: "Erro negativo da amplitude de velocidade radial.",
    pl_rvamplim: "Limite da amplitude de velocidade radial.",
    pl_rvamp_reflink: "Referência da amplitude de velocidade radial.",
    pl_projobliq: "Obliquidade projetada em graus.",
    pl_projobliqerr1: "Erro positivo da obliquidade projetada.",
    pl_projobliqerr2: "Erro negativo da obliquidade projetada.",
    pl_projobliqlim: "Limite da obliquidade projetada.",
    pl_projobliq_reflink: "Referência da obliquidade projetada.",
    pl_trueobliq: "Obliquidade verdadeira em graus.",
    pl_trueobliqerr1: "Erro positivo da obliquidade verdadeira.",
    pl_trueobliqerr2: "Erro negativo da obliquidade verdadeira.",
    pl_trueobliqlim: "Limite da obliquidade verdadeira.",
    pl_trueobliq_reflink: "Referência da obliquidade verdadeira.",
    st_spectype: "Tipo espectral da estrela hospedeira.",
    st_spectype_reflink: "Referência do tipo espectral.",
    st_teff: "Temperatura efetiva da estrela em Kelvin.",
    st_tefferr1: "Erro positivo da temperatura efetiva.",
    st_tefferr2: "Erro negativo da temperatura efetiva.",
    st_tefflim: "Limite da temperatura efetiva.",
    st_teff_reflink: "Referência da temperatura efetiva.",
    st_rad: "Raio da estrela em raios solares.",
    st_raderr1: "Erro positivo do raio da estrela.",
    st_raderr2: "Erro negativo do raio da estrela.",
    st_radlim: "Limite do raio da estrela.",
    st_rad_reflink: "Referência do raio da estrela.",
    st_mass: "Massa da estrela em massas solares.",
    st_masserr1: "Erro positivo da massa da estrela.",
    st_masserr2: "Erro negativo da massa da estrela.",
    st_masslim: "Limite da massa da estrela.",
    st_mass_reflink: "Referência da massa da estrela.",
    st_met: "Metallicidade da estrela em dex.",
    st_meterr1: "Erro positivo da metallicidade.",
    st_meterr2: "Erro negativo da metallicidade.",
    st_metlim: "Limite da metallicidade.",
    st_met_reflink: "Referência da metallicidade.",
    st_metratio: "Relação da metallicidade.",
    st_lum: "Luminosidade da estrela em log10 (Solar).",
    st_lumerr1: "Erro positivo da luminosidade.",
    st_lumerr2: "Erro negativo da luminosidade.",
    st_lumlim: "Limite da luminosidade.",
    st_lum_reflink: "Referência da luminosidade.",
    st_logg: "Gravidade da superfície da estrela em log10 (cm/s²).",
    st_loggerr1: "Erro positivo da gravidade da superfície.",
    st_loggerr2: "Erro negativo da gravidade da superfície.",
    st_logglim: "Limite da gravidade da superfície.",
    st_logg_reflink: "Referência da gravidade da superfície.",
    st_age: "Idade da estrela em bilhões de anos (Gyr).",
    st_ageerr1: "Erro positivo da idade da estrela.",
    st_ageerr2: "Erro negativo da idade da estrela.",
    st_agelim: "Limite da idade da estrela.",
    st_age_reflink: "Referência da idade da estrela.",
    st_dens: "Densidade da estrela em g/cm³.",
    st_denserr1: "Erro positivo da densidade da estrela.",
    st_denserr2: "Erro negativo da densidade da estrela.",
    st_denslim: "Limite da densidade da estrela.",
    st_dens_reflink: "Referência da densidade da estrela.",
    st_vsin: "Velocidade de rotação da estrela em km/s.",
    st_vsinerr1: "Erro positivo da velocidade de rotação.",
    st_vsinerr2: "Erro negativo da velocidade de rotação.",
    st_vsinlim: "Limite da velocidade de rotação.",
    st_vsin_reflink: "Referência da velocidade de rotação.",
    st_rotp: "Período de rotação da estrela em dias.",
    st_rotperr1: "Erro positivo do período de rotação.",
    st_rotperr2: "Erro negativo do período de rotação.",
    st_rotplim: "Limite do período de rotação.",
    st_rotp_reflink: "Referência do período de rotação.",
    st_radv: "Velocidade radial do sistema em km/s.",
    st_radverr1: "Erro positivo da velocidade radial.",
    st_radverr2: "Erro negativo da velocidade radial.",
    st_radvlim: "Limite da velocidade radial.",
    st_radv_reflink: "Referência da velocidade radial.",
    rastr: "Ascensão reta do sistema planetário em formato sexagesimal.",
    ra: "Ascensão reta do sistema planetário em graus decimais.",
    decstr: "Declinação do sistema planetário em formato sexagesimal.",
    dec: "Declinação do sistema planetário em graus decimais.",
    glat: "Latitude galáctica do sistema planetário em graus decimais.",
    glon: "Longitude galáctica do sistema planetário em graus decimais.",
    elat: "Latitude eclíptica do sistema planetário em graus decimais.",
    elon: "Longitude eclíptica do sistema planetário em graus decimais.",
    ra_reflink: "Referência da ascensão reta.",
    sy_pm: "Movimento próprio total em milissegundos de arco por ano.",
    sy_pmerr1: "Erro positivo do movimento próprio.",
    sy_pmerr2: "Erro negativo do movimento próprio.",
    sy_pmra:
      "Movimento próprio na ascensão reta em milissegundos de arco por ano.",
    sy_pmraerr1: "Erro positivo do movimento próprio na ascensão reta.",
    sy_pmraerr2: "Erro negativo do movimento próprio na ascensão reta.",
    sy_pmdec:
      "Movimento próprio na declinação em milissegundos de arco por ano.",
    sy_pmdecerr1: "Erro positivo do movimento próprio na declinação.",
    sy_pmdecerr2: "Erro negativo do movimento próprio na declinação.",
    sy_pm_reflink: "Referência do movimento próprio.",
    sy_dist: "Distância do sistema planetário em parsecs.",
    sy_disterr1: "Erro positivo da distância.",
    sy_disterr2: "Erro negativo da distância.",
    sy_dist_reflink: "Referência da distância.",
    sy_plx: "Paralaxe do sistema planetário em milissegundos de arco.",
    sy_plxerr1: "Erro positivo da paralaxe.",
    sy_plxerr2: "Erro negativo da paralaxe.",
    sy_plx_reflink: "Referência da paralaxe.",
    sy_bmag: "Magnitude B do sistema.",
    sy_bmagerr1: "Erro positivo da magnitude B.",
    sy_bmagerr2: "Erro negativo da magnitude B.",
    sy_bmag_reflink: "Referência da magnitude B.",
    sy_vmag: "Magnitude V do sistema.",
    sy_vmagerr1: "Erro positivo da magnitude V.",
    sy_vmagerr2: "Erro negativo da magnitude V.",
    sy_vmag_reflink: "Referência da magnitude V.",
    sy_jmag: "Magnitude J do sistema.",
    sy_jmagerr1: "Erro positivo da magnitude J.",
    sy_jmagerr2: "Erro negativo da magnitude J.",
    sy_jmag_reflink: "Referência da magnitude J.",
    sy_hmag: "Magnitude H do sistema.",
    sy_hmagerr1: "Erro positivo da magnitude H.",
    sy_hmagerr2: "Erro negativo da magnitude H.",
    sy_hmag_reflink: "Referência da magnitude H.",
    sy_kmag: "Magnitude K do sistema.",
    sy_kmagerr1: "Erro positivo da magnitude K.",
    sy_kmagerr2: "Erro negativo da magnitude K.",
    sy_kmag_reflink: "Referência da magnitude K.",
    sy_umag: "Magnitude U do sistema.",
    sy_umagerr1: "Erro positivo da magnitude U.",
    sy_umagerr2: "Erro negativo da magnitude U.",
    sy_umag_reflink: "Referência da magnitude U.",
    sy_gmag: "Magnitude G do sistema.",
    sy_gmagerr1: "Erro positivo da magnitude G.",
    sy_gmagerr2: "Erro negativo da magnitude G.",
    sy_gmag_reflink: "Referência da magnitude G.",
    sy_rmag: "Magnitude R do sistema.",
    sy_rmagerr1: "Erro positivo da magnitude R.",
    sy_rmagerr2: "Erro negativo da magnitude R.",
    sy_rmag_reflink: "Referência da magnitude R.",
    sy_imag: "Magnitude I do sistema.",
    sy_imagerr1: "Erro positivo da magnitude I.",
    sy_imagerr2: "Erro negativo da magnitude I.",
    sy_imag_reflink: "Referência da magnitude I.",
    sy_zmag: "Magnitude Z do sistema.",
    sy_zmagerr1: "Erro positivo da magnitude Z.",
    sy_zmagerr2: "Erro negativo da magnitude Z.",
    sy_zmag_reflink: "Referência da magnitude Z.",
    sy_w1mag: "Magnitude W1 do sistema.",
    sy_w1magerr1: "Erro positivo da magnitude W1.",
    sy_w1magerr2: "Erro negativo da magnitude W1.",
    sy_w1mag_reflink: "Referência da magnitude W1.",
    sy_w2mag: "Magnitude W2 do sistema.",
    sy_w2magerr1: "Erro positivo da magnitude W2.",
    sy_w2magerr2: "Erro negativo da magnitude W2.",
    sy_w2mag_reflink: "Referência da magnitude W2.",
    sy_w3mag: "Magnitude W3 do sistema.",
    sy_w3magerr1: "Erro positivo da magnitude W3.",
    sy_w3magerr2: "Erro negativo da magnitude W3.",
    sy_w3mag_reflink: "Referência da magnitude W3.",
    sy_w4mag: "Magnitude W4 do sistema.",
    sy_w4magerr1: "Erro positivo da magnitude W4.",
    sy_w4magerr2: "Erro negativo da magnitude W4.",
    sy_w4mag_reflink: "Referência da magnitude W4.",
    sy_gaiamag: "Magnitude Gaia do sistema.",
    sy_gaiamagerr1: "Erro positivo da magnitude Gaia.",
    sy_gaiamagerr2: "Erro negativo da magnitude Gaia.",
    sy_gaiamag_reflink: "Referência da magnitude Gaia.",
    sy_icmag: "Magnitude I.C. do sistema.",
    sy_icmagerr1: "Erro positivo da magnitude I.C.",
    sy_icmagerr2: "Erro negativo da magnitude I.C.",
    sy_icmag_reflink: "Referência da magnitude I.C.",
    sy_tmag: "Magnitude T do sistema.",
    sy_tmagerr1: "Erro positivo da magnitude T.",
    sy_tmagerr2: "Erro negativo da magnitude T.",
    sy_tmag_reflink: "Referência da magnitude T.",
    sy_kepmag: "Magnitude Kepler do sistema.",
    sy_kepmagerr1: "Erro positivo da magnitude Kepler.",
    sy_kepmagerr2: "Erro negativo da magnitude Kepler.",
    sy_kepmag_reflink: "Referência da magnitude Kepler.",
    pl_nnotes: "Número de notas relacionadas ao planeta.",
    st_nphot: "Número de observações fotométricas da estrela.",
    st_nrvc: "Número de espectros RV da estrela.",
    st_nspec: "Número total de espectros disponíveis da estrela.",
    pl_nespec: "Número de espectros relacionados ao planeta.",
    pl_ntranspec: "Número de espectros de trânsito relacionados ao planeta.",
    pl_ndispec: "Número de espectros de variação de velocidade radial.",
    tele_diam: "Diâmetro do telescópio utilizado na descoberta em centímetros.",
    SNR: "Razão sinal-ruído do dado espectral.",
  },
];