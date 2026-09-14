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
      'about.eyebrow': 'About Us',
      'about.bannerTitle': 'Brazilian roots.<br><span>Canadian home.</span>',
      'about.bannerLead': 'More than a team. A community built around football.',
      'about.pillEst': 'Est. 2024',
      'about.pillFvsl': 'Fraser Valley Soccer League',
      'about.pillMasters': 'Masters 3',
      'about.storyTitle': 'Our story',
      'about.storyLead': 'More than a team. <span>A community built around football.</span>',
      'about.storyP1': 'Brazuca FC was founded in 2024 by a group of Brazilians with one simple idea: bring people together through football and compete in the Fraser Valley Soccer League (FVSL).',
      'about.storyP2': 'What started as a group of colleagues preparing for the 2024/25 Fall season has continued to grow with every year. Season after season, Brazuca FC has evolved both on and off the field — strengthening our squad, improving our organization, building new partnerships, and creating a stronger identity for the club.',
      'about.storyP3': 'At our core, however, our purpose remains the same: enjoy the game, build friendships, and create great memories together.',
      'about.storyP4': 'We believe amateur football should be fun, but that doesn’t mean we don’t compete. As the club continues to grow, so does our ambition. We want to become more competitive every season, challenge ourselves against strong teams, and fight for trophies — while never losing the friendship and team spirit that created Brazuca FC in the first place.',
      'about.storyP5': 'Our vision goes beyond the results on the field. We are constantly looking for ways to expand the club, welcome new players and partners, strengthen our presence in the community, and build something that can continue growing for years to come.',
      'about.journeyTitle': 'The journey',
      'about.t1Year': '2024',
      'about.t1Text': 'Founded by a group of Brazilian friends and colleagues.',
      'about.t2Year': '2024/25',
      'about.t2Text': 'First Fall season in the Fraser Valley Soccer League.',
      'about.t3Year': '2026/27',
      'about.t3Text': 'Competing in FVSL Masters 3, with our first sponsors on board.',
      'about.t4Year': 'Next',
      'about.t4Text': 'More players, more partners — and trophies.',
      'about.mascotCaption': 'Meet our mascot — green, gold and never quiet.',
      'about.valuesEyebrow': 'What we stand for',
      'about.valuesTitle': 'Why we <span>play</span>',
      'about.val1Title': 'Enjoy the game',
      'about.val1Text': 'Amateur football should be fun. Every match is a reason to get together.',
      'about.val2Title': 'Build friendships',
      'about.val2Text': 'The team spirit that created the club comes first, on and off the field.',
      'about.val3Title': 'Compete',
      'about.val3Text': 'More competitive every season, testing ourselves against strong teams and fighting for trophies.',
      'about.val4Title': 'Grow the club',
      'about.val4Text': 'Welcoming new players and partners, and building something that lasts for years to come.',
      'about.manifestoText': 'Brazilian roots. <span>Canadian home.</span><br>One team. <span>One family.</span>',
      'about.manifestoSub': 'This is Brazuca FC. 🇧🇷🇨🇦⚽',

      // Team Page
      'team.eyebrow': 'Team',
      'team.title': 'The <span>Squad</span>',
      'team.lead': 'Season 2026/27 in FVSL Masters 3. Twenty-one players and one very loud coach, all wearing the green and gold.',
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
      'footer.rights': 'All rights reserved.',
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
      'about.eyebrow': 'Sobre Nós',
      'about.bannerTitle': 'Raízes brasileiras.<br><span>Lar canadense.</span>',
      'about.bannerLead': 'Mais que um time. Uma comunidade unida pelo futebol.',
      'about.pillEst': 'Fundado em 2024',
      'about.pillFvsl': 'Fraser Valley Soccer League',
      'about.pillMasters': 'Masters 3',
      'about.storyTitle': 'Nossa história',
      'about.storyLead': 'Mais que um time. <span>Uma comunidade unida pelo futebol.</span>',
      'about.storyP1': 'O Brazuca FC foi fundado em 2024 por um grupo de brasileiros com uma ideia simples: unir pessoas através do futebol e competir na Fraser Valley Soccer League (FVSL).',
      'about.storyP2': 'O que começou como um grupo de colegas se preparando para a temporada de Outono de 2024/25 continuou crescendo a cada ano. Temporada após temporada, o Brazuca FC evoluiu dentro e fora de campo — fortalecendo o elenco, aprimorando a organização, construindo novas parcerias e criando uma identidade cada vez mais forte para o clube.',
      'about.storyP3': 'Na nossa essência, no entanto, nosso propósito permanece o mesmo: aproveitar o jogo, construir amizades e criar grandes memórias juntos.',
      'about.storyP4': 'Acreditamos que o futebol amador deve ser divertido, mas isso não significa que não sejamos competitivos. Conforme o clube cresce, nossa ambição também cresce. Queremos ser mais competitivos a cada temporada, nos desafiar contra grandes equipes e lutar por troféus — sem nunca perder a amizade e o espírito de equipe que criaram o Brazuca FC.',
      'about.storyP5': 'Nossa visão vai além dos resultados em campo. Estamos constantemente buscando maneiras de expandir o clube, dar as boas-vindas a novos jogadores e parceiros, fortalecer nossa presença na comunidade e construir algo que continue crescendo nos próximos anos.',
      'about.journeyTitle': 'A jornada',
      'about.t1Year': '2024',
      'about.t1Text': 'Fundado por um grupo de amigos e colegas brasileiros.',
      'about.t2Year': '2024/25',
      'about.t2Text': 'Primeira temporada de Outono na Fraser Valley Soccer League.',
      'about.t3Year': '2026/27',
      'about.t3Text': 'Competindo na FVSL Masters 3, com nossos primeiros patrocinadores a bordo.',
      'about.t4Year': 'Próximos',
      'about.t4Text': 'Mais jogadores, mais parceiros — e troféus.',
      'about.mascotCaption': 'Conheça nosso mascote — verde, amarelo e nunca quieto.',
      'about.valuesEyebrow': 'O que defendemos',
      'about.valuesTitle': 'Por que <span>jogamos</span>',
      'about.val1Title': 'Aproveitar o jogo',
      'about.val1Text': 'Futebol amador deve ser divertido. Cada jogo é um motivo para se reunir.',
      'about.val2Title': 'Construir amizades',
      'about.val2Text': 'O espírito de equipe que criou o clube vem em primeiro lugar, dentro e fora de campo.',
      'about.val3Title': 'Competir',
      'about.val3Text': 'Mais competitivos a cada temporada, nos testando contra grandes times e lutando por troféus.',
      'about.val4Title': 'Fazer o clube crescer',
      'about.val4Text': 'Recebendo novos jogadores e parceiros, e construindo algo que dure por muitos anos.',
      'about.manifestoText': 'Raízes brasileiras. <span>Lar canadense.</span><br>Um time. <span>Uma família.</span>',
      'about.manifestoSub': 'Este é o Brazuca FC. 🇧🇷🇨🇦⚽',

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
