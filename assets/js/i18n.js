/*
 * Brazuca FC — i18n localization dictionary & module (EN / PT).
 */
window.I18N = (() => {
  'use strict';

  const STORAGE_KEY = 'brazucafc_lang';
  const DEFAULT_LANG = 'en';

  const TRANSLATIONS = {
    en: {
      // Navigation & Brand
      'nav.about': 'About Us',
      'nav.team': 'Team',
      'nav.schedule': 'Schedule',
      'nav.gallery': 'Gallery',
      'nav.contact': 'Contact',
      'brand.sub': 'More than a team, we are family.',

      // Hero & Landing
      'hero.eyebrow': 'FVSL Masters 3 · Season 2026/27',
      'hero.title': 'Brazuca <span>FC</span>',
      'hero.tagline': 'More Than a Team,<br>We Are Family',
      'hero.sub': 'Brazilian roots, Canadian home. A club built on friendship and played with passion in the Fraser Valley Soccer League.',
      'hero.nextMatch': 'Next match',
      'hero.meetSquad': 'Meet the squad',

      // Features
      'feature.amateur': 'Amateur football',
      'feature.amateurSub': 'Passion &amp; respect',
      'feature.community': 'Community',
      'feature.communitySub': 'On and off the pitch',
      'feature.competition': 'Competition',
      'feature.competitionSub': 'FVSL Masters 3',
      'feature.roots': 'Brazilian roots',
      'feature.rootsSub': 'Proudly Canadian',

      // Home Sections
      'matchday.eyebrow': 'Matchday',
      'matchday.title': 'Next <span>Fixture</span>',
      'matchday.viewAll': 'Full Schedule &amp; Table →',
      'table.title': 'League <span>Table</span>',
      'table.fullLink': 'Full standings →',
      'squad.eyebrow': 'The Squad',
      'squad.title': 'Meet the <span>Brazucas</span>',
      'squad.viewAll': 'View full squad →',

      // About Page
      'about.eyebrow': 'Our Story',
      'about.title': 'More than a team, <span>we are family</span>',
      'about.lead': 'Brazuca FC was born from the passion for football and the bond of the Brazilian community in Metro Vancouver.',
      'about.storyTitle': 'From Churrascos to the Pitch',
      'about.storyP1': 'What started as informal weekend kickabouts between friends quickly grew into something bigger. Brazuca FC represents the warmth, joy, and competitive spirit of Brazilian football, rooted in our Canadian home.',
      'about.storyP2': 'We compete in the Fraser Valley Soccer League (FVSL), bringing grit, skill, and camaraderie to every match.',
      'about.timelineTitle': 'Our <span>Journey</span>',
      'about.t1Year': '2023',
      'about.t1Title': 'The Foundation',
      'about.t1Text': 'First gathered as friends for informal matches across Vancouver parks.',
      'about.t2Year': '2024',
      'about.t2Title': 'Joining FVSL',
      'about.t2Text': 'Officially registered in the Fraser Valley Soccer League to compete.',
      'about.t3Year': '2025/26',
      'about.t3Title': 'Growing Stronger',
      'about.t3Text': 'Expanded the squad, established our core values, and built a strong community fan base.',
      'about.valuesTitle': 'Our <span>Values</span>',
      'about.val1Title': 'Family First',
      'about.val1Text': 'Beyond 90 minutes on the field, we support each other through life in Canada.',
      'about.val2Title': 'Passion &amp; Respect',
      'about.val2Text': 'We play with heart, honoring the beautiful game and respecting every opponent.',
      'about.val3Title': 'Compete',
      'about.val3Text': 'More competitive every season, testing ourselves against strong teams and fighting for trophies.',

      // Team Page
      'team.eyebrow': 'Squad 2026/27',
      'team.title': 'Players &amp; <span>Staff</span>',
      'team.lead': 'The team representing Brazuca FC in the FVSL Masters 3 division.',
      'team.coachTitle': 'Head Coach',

      // Schedule Page
      'schedule.eyebrow': 'Schedule',
      'schedule.title': 'Fixtures &amp; <span>Table</span>',
      'schedule.lead': 'Winter Masters 2026/27 · Masters 3 (Fall). Fixtures, results and standings update automatically from the Fraser Valley Soccer League.',
      'schedule.summaryTitle': 'Season at a glance',
      'schedule.all': 'All',
      'schedule.upcoming': 'Upcoming',
      'schedule.results': 'Results',
      'schedule.fullTitle': 'Full <span>Schedule</span>',

      // Gallery Page
      'gallery.eyebrow': 'Gallery',
      'gallery.title': 'Photos &amp; <span>Moments</span>',
      'gallery.lead': 'Snapshots from matchdays, churrascos, and club events.',

      // Contact Page
      'contact.eyebrow': 'Contact Us',
      'contact.title': 'Get In <span>Touch</span>',
      'contact.lead': 'Want to play, sponsor, or organize a friendly match? Reach out to us!',
      'contact.emailTitle': 'Email',
      'contact.instaTitle': 'Instagram',
      'contact.leagueTitle': 'FVSL League Page',

      // Footer
      'footer.moreThanTeam': 'More than a team, we are family.<br>Brazilian roots. Canadian home.',
      'footer.club': 'Club',
      'footer.touch': 'Get in touch',
      'footer.sponsors': 'Sponsors',
      'footer.rights': 'Brazuca FC. All rights reserved.',
      'footer.motto': 'Uma só nação, um só coração. 🇧🇷🇨🇦',

      // Dynamic JS Strings
      'js.nextMatch': 'Next match',
      'js.liveNow': 'Live now',
      'js.happeningNow': 'Happening now — vamo Brazuca!',
      'js.today': 'Today',
      'js.tomorrow': 'Tomorrow',
      'js.inDays': 'In {days} days',
      'js.byeWeek': 'Bye week',
      'js.noGameRound': 'No game this round',
      'js.backInAction': 'Back in action',
      'js.seasonWrap': 'That’s a wrap',
      'js.seasonWrapText': 'The regular season is done. Thanks for following the Brazucas — next season’s fixtures land here as soon as the league publishes them.',
      'js.rest': 'Rest',
      'js.resultPending': 'Result pending',
      'js.nextUp': 'Next up',
      'js.home': 'Home',
      'js.away': 'Away',
      'js.matches': 'Matches',
      'js.atHome': 'At home',
      'js.byeWeeks': 'Bye weeks',
      'js.wdl': 'W-D-L',
      'js.addToCalendar': 'Add to Calendar',
      'js.add': 'Add',
      'js.exportSeason': 'Export all upcoming games (.ics)',
      'js.fromLeague': 'From the <a href="{url}" target="_blank" rel="noopener">Fraser Valley Soccer League</a>',
      'js.updated': 'updated',
      'js.coach': 'Head Coach',
      'js.coachingStaff': 'Coaching Staff',
      'js.photosCount': '{count} photos',
      'js.photoCount': '{count} photo',
      'js.playersCount': '{count} players',
      'js.playerCount': '{count} player',
      'js.moreMoments': 'More moments coming',
      'js.sendShot': 'Got a great shot from matchday? Send it to <a href="mailto:tech@brazucafc.ca">tech@brazucafc.ca</a>.',
      'js.round': 'Round {round}',
      'js.teamCol': 'Team',
      'js.noResultsYet': 'No results yet — the table fills in once the first scores are posted.',
      'js.errSchedule': 'We couldn’t load the schedule right now.',
      'js.errNextMatch': 'We couldn’t load the next match right now.',
      'js.errStandings': 'We couldn’t load the standings right now.',
      'js.errSquad': 'We couldn’t load the squad right now.',
      'js.errGallery': 'We couldn’t load the gallery right now.',
      'js.emptyAll': 'No fixtures published yet.',
      'js.emptyUpcoming': 'No more fixtures this season.',
      'js.emptyResults': 'No results yet — the season is just getting started.',
      'js.win': 'Win',
      'js.draw': 'Draw',
      'js.loss': 'Loss',

      // Group titles & Roles
      'group.goalkeepers': 'Goalkeepers',
      'group.defenders': 'Defenders',
      'group.full-backs': 'Full-Backs',
      'group.defensive-midfielders': 'Defensive Midfielders',
      'group.attacking-midfielders': 'Attacking Midfielders',
      'group.forwards': 'Forwards',

      'role.Head Coach': 'Head Coach',
      'role.Goalkeeper': 'Goalkeeper',
      'role.Centre-back': 'Centre-back',
      'role.Full-back': 'Full-back',
      'role.Defensive midfielder': 'Defensive midfielder',
      'role.Attacking midfielder': 'Attacking midfielder',
      'role.Forward': 'Forward',
      'role.captain': 'Captain',

      'coach.bio': 'The voice on the touchline. If you hear “Vamoooo Brazucaaaa!” from across the park, you’ve found him.',

      // Standings headers
      'table.gp.abbr': 'GP',
      'table.gp.title': 'Games played',
      'table.w.abbr': 'W',
      'table.w.title': 'Wins',
      'table.d.abbr': 'D',
      'table.d.title': 'Draws',
      'table.l.abbr': 'L',
      'table.l.title': 'Losses',
      'table.gf.abbr': 'GF',
      'table.gf.title': 'Goals for',
      'table.ga.abbr': 'GA',
      'table.ga.title': 'Goals against',
      'table.gd.abbr': 'GD',
      'table.gd.title': 'Goal difference',
      'table.pts.abbr': 'PTS',
      'table.pts.title': 'Points',

      // Bye messages
      'bye.0': 'No match this round. Legs up, boots cleaned — the Brazucas are back next week.',
      'bye.1': 'Bye week! The pitch is quiet, but the group chat definitely isn’t.',
      'bye.2': 'Rest round for the squad. Ice the knees, fire up the churrasco, see you next round.',
      'bye.3': 'No game this week — even the toucan needs a day off.'
    },

    pt: {
      // Navigation & Brand
      'nav.about': 'Sobre Nós',
      'nav.team': 'Elenco',
      'nav.schedule': 'Jogos &amp; Tabela',
      'nav.gallery': 'Galeria',
      'nav.contact': 'Contato',
      'brand.sub': 'Mais que um time, somos uma família.',

      // Hero & Landing
      'hero.eyebrow': 'FVSL Masters 3 · Temporada 2026/27',
      'hero.title': 'Brazuca <span>FC</span>',
      'hero.tagline': 'Mais Que Um Time,<br>Somos Uma Família',
      'hero.sub': 'Raízes brasileiras, lar canadense. Um clube construído na amizade e jogado com paixão na Fraser Valley Soccer League.',
      'hero.nextMatch': 'Próxima partida',
      'hero.meetSquad': 'Conheça o elenco',

      // Features
      'feature.amateur': 'Futebol amador',
      'feature.amateurSub': 'Paixão &amp; respeito',
      'feature.community': 'Comunidade',
      'feature.communitySub': 'Dentro e fora de campo',
      'feature.competition': 'Competição',
      'feature.competitionSub': 'FVSL Masters 3',
      'feature.roots': 'Raízes brasileiras',
      'feature.rootsSub': 'Orgulhosamente no Canadá',

      // Home Sections
      'matchday.eyebrow': 'Dia de Jogo',
      'matchday.title': 'Próxima <span>Partida</span>',
      'matchday.viewAll': 'Calendário Completo &amp; Tabela →',
      'table.title': 'Tabela da <span>Liga</span>',
      'table.fullLink': 'Classificação completa →',
      'squad.eyebrow': 'O Elenco',
      'squad.title': 'Conheça os <span>Brazucas</span>',
      'squad.viewAll': 'Ver elenco completo →',

      // About Page
      'about.eyebrow': 'Nossa História',
      'about.title': 'Mais que um time, <span>somos uma família</span>',
      'about.lead': 'O Brazuca FC nasceu da paixão pelo futebol e da união da comunidade brasileira em Metro Vancouver.',
      'about.storyTitle': 'Dos Churrascos para o Campo',
      'about.storyP1': 'O que começou como peladas informais de fim de semana entre amigos rapidamente cresceu para algo maior. O Brazuca FC representa o calor, a alegria e o espírito competitivo do futebol brasileiro, enraizado em nosso lar canadense.',
      'about.storyP2': 'Competimos na Fraser Valley Soccer League (FVSL), trazendo raça, habilidade e camaradagem a cada partida.',
      'about.timelineTitle': 'Nossa <span>Jornada</span>',
      'about.t1Year': '2023',
      'about.t1Title': 'A Fundação',
      'about.t1Text': 'Primeiros encontros de amigos para peladas nos parques de Vancouver.',
      'about.t2Year': '2024',
      'about.t2Title': 'Entrada na FVSL',
      'about.t2Text': 'Inscrição oficial na Fraser Valley Soccer League para competir na liga.',
      'about.t3Year': '2025/26',
      'about.t3Title': 'Crescendo Fortes',
      'about.t3Text': 'Expandimos o elenco, consolidamos nossos valores e formamos uma torcida calorosa.',
      'about.valuesTitle': 'Nossos <span>Valores</span>',
      'about.val1Title': 'Família em Primeiro Lugar',
      'about.val1Text': 'Além dos 90 minutos em campo, apoiamos uns aos outros na vida no Canadá.',
      'about.val2Title': 'Paixão &amp; Respeito',
      'about.val2Text': 'Jogamos com raça e coração, honrando o futebol e respeitando cada adversário.',
      'about.val3Title': 'Competição',
      'about.val3Text': 'Cada temporada mais competitivos, testando nossos limites contra grandes times e buscando troféus.',

      // Team Page
      'team.eyebrow': 'Elenco 2026/27',
      'team.title': 'Jogadores &amp; <span>Comissão</span>',
      'team.lead': 'A equipe que representa o Brazuca FC na divisão FVSL Masters 3.',
      'team.coachTitle': 'Técnico',

      // Schedule Page
      'schedule.eyebrow': 'Calendário',
      'schedule.title': 'Jogos &amp; <span>Tabela</span>',
      'schedule.lead': 'Winter Masters 2026/27 · Masters 3 (Outono). Calendário, resultados e classificação atualizados automaticamente pela Fraser Valley Soccer League.',
      'schedule.summaryTitle': 'Resumo da Temporada',
      'schedule.all': 'Todos',
      'schedule.upcoming': 'Próximos',
      'schedule.results': 'Resultados',
      'schedule.fullTitle': 'Calendário <span>Completo</span>',

      // Gallery Page
      'gallery.eyebrow': 'Galeria',
      'gallery.title': 'Fotos &amp; <span>Momentos</span>',
      'gallery.lead': 'Registros dos dias de jogo, churrascos e eventos do clube.',

      // Contact Page
      'contact.eyebrow': 'Fale Conosco',
      'contact.title': 'Entre em <span>Contato</span>',
      'contact.lead': 'Quer jogar, patrocinar ou organizar um amistoso? Fale com a gente!',
      'contact.emailTitle': 'E-mail',
      'contact.instaTitle': 'Instagram',
      'contact.leagueTitle': 'Página da Liga FVSL',

      // Footer
      'footer.moreThanTeam': 'Mais que um time, somos uma família.<br>Raízes brasileiras. Lar canadense.',
      'footer.club': 'Clube',
      'footer.touch': 'Contato',
      'footer.sponsors': 'Patrocinadores',
      'footer.rights': 'Brazuca FC. Todos os direitos reservados.',
      'footer.motto': 'Uma só nação, um só coração. 🇧🇷🇨🇦',

      // Dynamic JS Strings
      'js.nextMatch': 'Próxima partida',
      'js.liveNow': 'Ao vivo',
      'js.happeningNow': 'Acontecendo agora — vamo Brazuca!',
      'js.today': 'Hoje',
      'js.tomorrow': 'Amanhã',
      'js.inDays': 'Em {days} dias',
      'js.byeWeek': 'Semana de folga',
      'js.noGameRound': 'Sem jogo nesta rodada',
      'js.backInAction': 'De volta a campo',
      'js.seasonWrap': 'Fim de temporada',
      'js.seasonWrapText': 'A temporada regular acabou. Obrigado por torcer pelos Brazucas — os jogos da próxima temporada estarão aqui assim que a liga publicar.',
      'js.rest': 'Folga',
      'js.resultPending': 'Aguardando resultado',
      'js.nextUp': 'Próximo jogo',
      'js.home': 'Casa',
      'js.away': 'Fora',
      'js.matches': 'Partidas',
      'js.atHome': 'Em casa',
      'js.byeWeeks': 'Folgas',
      'js.wdl': 'V-E-D',
      'js.addToCalendar': 'Adicionar à Agenda',
      'js.add': 'Add',
      'js.exportSeason': 'Exportar jogos futuros (.ics)',
      'js.fromLeague': 'Dados da <a href="{url}" target="_blank" rel="noopener">Fraser Valley Soccer League</a>',
      'js.updated': 'atualizado',
      'js.coach': 'Técnico',
      'js.coachingStaff': 'Comissão Técnica',
      'js.photosCount': '{count} fotos',
      'js.photoCount': '{count} foto',
      'js.playersCount': '{count} jogadores',
      'js.playerCount': '{count} jogador',
      'js.moreMoments': 'Mais momentos em breve',
      'js.sendShot': 'Tirou uma foto incrível no dia do jogo? Envie para <a href="mailto:tech@brazucafc.ca">tech@brazucafc.ca</a>.',
      'js.round': 'Rodada {round}',
      'js.teamCol': 'Time',
      'js.noResultsYet': 'Nenhum resultado ainda — a tabela será preenchida assim que os primeiros placares forem lançados.',
      'js.errSchedule': 'Não foi possível carregar o calendário no momento.',
      'js.errNextMatch': 'Não foi possível carregar a próxima partida no momento.',
      'js.errStandings': 'Não foi possível carregar a tabela no momento.',
      'js.errSquad': 'Não foi possível carregar o elenco no momento.',
      'js.errGallery': 'Não foi possível carregar a galeria no momento.',
      'js.emptyAll': 'Nenhum jogo publicado ainda.',
      'js.emptyUpcoming': 'Não há mais jogos nesta temporada.',
      'js.emptyResults': 'Sem resultados ainda — a temporada está apenas começando.',
      'js.win': 'Vitória',
      'js.draw': 'Empate',
      'js.loss': 'Derrota',

      // Group titles & Roles
      'group.goalkeepers': 'Goleiros',
      'group.defenders': 'Zagueiros',
      'group.full-backs': 'Laterais',
      'group.defensive-midfielders': 'Volantes',
      'group.attacking-midfielders': 'Meias-Atacantes',
      'group.forwards': 'Atacantes',

      'role.Head Coach': 'Técnico',
      'role.Goalkeeper': 'Goleiro',
      'role.Centre-back': 'Zagueiro',
      'role.Full-back': 'Lateral',
      'role.Defensive midfielder': 'Volante',
      'role.Attacking midfielder': 'Meia-atacante',
      'role.Forward': 'Atacante',
      'role.captain': 'Capitão',

      'coach.bio': 'A voz na beira do gramado. Se você ouvir “Vamoooo Brazucaaaa!” de longe, é ele.',

      // Standings headers
      'table.gp.abbr': 'J',
      'table.gp.title': 'Jogos',
      'table.w.abbr': 'V',
      'table.w.title': 'Vitórias',
      'table.d.abbr': 'E',
      'table.d.title': 'Empates',
      'table.l.abbr': 'D',
      'table.l.title': 'Derrotas',
      'table.gf.abbr': 'GP',
      'table.gf.title': 'Gols pró',
      'table.ga.abbr': 'GC',
      'table.ga.title': 'Gols contra',
      'table.gd.abbr': 'SG',
      'table.gd.title': 'Saldo de gols',
      'table.pts.abbr': 'PTS',
      'table.pts.title': 'Pontos',

      // Bye messages
      'bye.0': 'Sem jogo nesta rodada. Pernas pro alto, chuteiras limpas — os Brazucas voltam na próxima semana.',
      'bye.1': 'Semana de folga! O campo está calmo, mas o grupo do WhatsApp definitivamente não.',
      'bye.2': 'Rodada de descanso para o elenco. Gelo no joelho, acende o churrasco, nos vemos na próxima.',
      'bye.3': 'Sem jogo esta semana — até o tucano precisa de um dia de folga.'
    }
  };

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && TRANSLATIONS[saved]) return saved;
    const browser = (navigator.language || '').toLowerCase();
    return browser.startsWith('pt') ? 'pt' : DEFAULT_LANG;
  }

  function t(key, vars = {}) {
    const lang = getLang();
    let text = TRANSLATIONS[lang]?.[key] || TRANSLATIONS[DEFAULT_LANG]?.[key] || key;
    Object.keys(vars).forEach(k => {
      text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), vars[k]);
    });
    return text;
  }

  function applyTranslations() {
    const lang = getLang();
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const translated = t(key);
      if (translated) {
        if (el.dataset.i18nTarget === 'placeholder') {
          el.placeholder = translated;
        } else {
          el.innerHTML = translated;
        }
      }
    });

    document.querySelectorAll('[data-lang]').forEach(btn => {
      const isActive = btn.dataset.lang === lang;
      btn.setAttribute('aria-pressed', String(isActive));
      btn.classList.toggle('is-active', isActive);
    });

    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  function setLang(lang) {
    if (!TRANSLATIONS[lang]) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTranslations);
  } else {
    applyTranslations();
  }

  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-lang]');
    if (btn) {
      setLang(btn.dataset.lang);
    }
  });

  return { getLang, setLang, t, applyTranslations };
})();
