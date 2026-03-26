const playlists = [
    { songs: [ { title: 'Dammit - Blink 182', url: 'https://soundcloud.com/blink-182/dammit-album-version' }, { title: 'Adams Song - Blink 182', url: 'https://soundcloud.com/blink-182/adams-song-album-version' }, { title: 'All the Small Things - Blink 182', url: 'https://soundcloud.com/scorpionium/all-the-small-things' }, { title: 'In Too Deep - Sum 41', url: 'https://soundcloud.com/steadyeddyyy/sum41-in-too-deep' }, { title: 'Still Waiting - Sum 41', url: 'https://soundcloud.com/jake-baxendale/sum-41-still-waiting-cover' }, { title: 'The Offspring - Self Esteem', url: 'https://soundcloud.com/offspring/self-esteem-1' }, { title: 'The Offspring - The Kids Aren t Alright', url: 'https://soundcloud.com/originofalan/the-offspring-the-kids-arent-alright' }, { title: 'The Offspring - Pretty Fly for a white guy', url: 'https://soundcloud.com/luis-linares-1/pretty-fly-for-a-white-guy-the' }, { title: 'Green Day - Basket Case', url: 'https://soundcloud.com/greenday/basket-case' }, { title: 'Avril Lavigne - Complicated', url: 'https://soundcloud.com/ionut-morosanu-1/avril-lavigne-complicated-1' }, { title: 'Fall Out Boy - Sugar We re Goin Down', url: 'https://soundcloud.com/falloutboy/04-sugar-were-goin-down' }, { title: 'My Friends Over You - New Found Glory', url: 'https://soundcloud.com/fmspompon/my-friends-over-you' }, { title: 'Simple Plan - I m Just A Kid', url: 'https://soundcloud.com/user-132170116/simple-plan-im-just-a-kid' } ] },
    { songs: [ { title: 'Linkin Park - Numb', url: 'https://soundcloud.com/linkinpark/numb' }, { title: 'Alter Bridge - Metalingus', url: 'https://soundcloud.com/alterbridgeofficial/metalingus' }, { title: 'Linkin Park - In the End', url: 'https://soundcloud.com/linkinpark/in-the-end' }, { title: 'Red Hot Chili Peppers - By the Way', url: 'https://soundcloud.com/red-hot-chili-peppers-official/by-the-way-1' }, { title: 'Evanescence - Bring Me To Life', url: 'https://soundcloud.com/raife-duarte/evanescence-bring-me-to-life' }, { title: 'Red Hot Chili Peppers - Californication', url: 'https://soundcloud.com/red-hot-chili-peppers-official/californication' }, { title: 'System of a down - Chop Suey', url: 'https://soundcloud.com/alen-zerek/system-of-a-down-chop-suey' }, { title: 'The White Stripes - Seven Nation Army', url: 'https://soundcloud.com/mike-hunt-2/seven-nation-army' }, { title: 'Jet - Are you Gonna Be My Girl', url: 'https://soundcloud.com/adamashvili-gigi1/jet-are-you-gonna-be-my-girl' }, { title: 'Franz Ferdinand - Take Me Out', url: 'https://soundcloud.com/franzferdinand/take-me-out-1' }, { title: 'Red Hot Chili Peppers - Can t Stop', url: 'https://soundcloud.com/red-hot-chili-peppers-official/cant-stop' }, { title: 'Audioslave - Like a stone', url: 'https://soundcloud.com/bezz_records/audioslave-like-a-stone' }, { title: 'Headstrong - Trapt', url: 'https://soundcloud.com/traptmusic/trapt-headstrong' }, { title: 'Drowning Pool - Bodies', url: 'https://soundcloud.com/drowning-pool/bodies' }, { title: 'Slipknot - Duality', url: 'https://soundcloud.com/slipknot/duality' }, { title: 'Nickelback - How You Remind Me', url: 'https://soundcloud.com/nickelback/how-you-remind-me' }, { title: 'Lifehouse - You And Me', url: 'https://soundcloud.com/lifehouse-official/you-and-me-album-version' }, { title: 'Hoobastank - The Reason', url: 'https://soundcloud.com/kevin-brian-2/the-reason-hoobastank' }, { title: 'Coldplay - Yellow', url: 'https://soundcloud.com/archelle-425093208/coldplay-yellow' }, { title: '3 doors down - here without you', url: 'https://soundcloud.com/ismahalil/3-doors-down-here-without-you-3' } ] },
    { songs: [ { title: 'Britney Spears - Baby One More Time', url: 'https://soundcloud.com/julia-chang-594508242/britney-spears-baby-one-more' }, { title: 'Backstreet Boys - I Want It That Way', url: 'https://soundcloud.com/jacky-disha-175684960/backstreet-boys-greatest-hits' }, { title: 'NSync - Bye Bye Bye', url: 'https://soundcloud.com/the-cheerleader/nsync-bye-bye-bye' }, { title: 'Gwen Stefani - hollaback girl', url: 'https://soundcloud.com/dlfakszkzk/himwadda-hollaback-girl-copy' }, { title: 'Alizee - Moi Lolita', url: 'https://soundcloud.com/snow-powder/alizee-moi-lolita' }, { title: 'Nelly Furtado - Promiscuous', url: 'https://soundcloud.com/nellyfurtado/promiscuous-album-version' }, { title: 'Outkast - Ms. Jackson', url: 'https://soundcloud.com/jyalnas/im-sorry-ms-jackson-outkast' }, { title: 'Justin Timberlake - Cry Me A River', url: 'https://soundcloud.com/rugiolivier/justin-timberlake-cry-me-a-river-ro-remix' } ] },
    { songs: [ { title: '50Cent - P.I.M.P.', url: 'https://soundcloud.com/dc_mt_louko/50cent-pimp' }, { title: 'Black Eyes Peas - My Humps', url: 'https://soundcloud.com/bajatumusica/black-eyes-peas-my-humps' }, { title: 'Usher - Yeah', url: 'https://soundcloud.com/trey_plays-yt/usher-yeah-original' }, { title: 'Nelly - Hot In Herre', url: 'https://soundcloud.com/nelly-official/hot-in-herre' }, { title: 'Eminem - Without Me', url: 'https://soundcloud.com/eminemofficial/without-me-album-version' }, { title: 'Black Eyes Peas - Where Is The Love?', url: 'https://soundcloud.com/black-eyed-peas-official/where-is-the-love-album' }, { title: 'Black Eyes Peas - Don t Phunk With My Heart', url: 'https://soundcloud.com/black-eyed-peas-official/dont-phunk-with-my-heart-1' }, { title: 'Destiny s Child - Say My Name', url: 'https://soundcloud.com/sowce/destinys-child-say-my-name' }, { title: 'Eamon - I Dont Want You Back', url: 'https://soundcloud.com/mix-93-3-all-the-mix/eamon-i-dont-want-you-back' }, { title: 'Panjabi MC - Mundian To Bach Ke', url: 'https://soundcloud.com/panjabi-mc-official/mundian-to-bach-ke-2' }, { title: 'Pony - Ginuwine', url: 'https://soundcloud.com/user-190562091-180395941/12-ginuwine-pony' }, { title: 'Mario - Let Me Love You', url: 'https://soundcloud.com/marioofficial/let-me-love-you-anniversary' }, { title: 'Mary J Blige - Family Affair', url: 'https://soundcloud.com/bakuridzedima/family-affair-remix' }, { title: 'M.I.A - Paper Planes', url: 'https://soundcloud.com/max-420/sets/mia-paper-plane' }, { title: 'Beyonce - Crazy In Love ft. JAY-Z', url: 'https://soundcloud.com/e1oovdghddfw/crazy-in-love-ft-jay' }, { title: '50Cent - In Da Club', url: 'https://soundcloud.com/leo-ali-306816420/50cent-in-da-club-hd' }, { title: 'Nelly - Dilemma feat. Kelly Rowland', url: 'https://soundcloud.com/nelly-official/dilemma' }, { title: 'Sean Paul - Get Busy', url: 'https://soundcloud.com/seanpaul2/get-busy' }, { title: 'Eminem - Lose Yourself', url: 'https://soundcloud.com/eminemofficial/lose-yourself' } ] }
];

document.addEventListener('DOMContentLoaded', function () {
    const scroller = document.getElementById('cdScroller');
    const dropZone = document.getElementById('dropZone');
    const glow = document.getElementById('glowEffect');
    const overlay = document.getElementById('darkOverlay');
    const activeWrapper = document.getElementById('activeCdWrapper');
    const playBtn = document.getElementById('playBtn');
    const playIcon = document.getElementById('playIcon');
    const trackTitle = document.getElementById('trackTitle');
    const permPopup = document.getElementById('permPopup');
    const permBtn = document.getElementById('permBtn');

    let widget = SC.Widget(document.getElementById('sc-widget'));
    let currentPlaylistIdx = -1;
    let currentSongIdx = 0;
    let isPlaying = false;
    let isDragging = false;
    let dragClone = null;
    let audioUnlocked = false;

    // --- ALIGN GLOW ---
    function alignGlow() {
        const rect = dropZone.getBoundingClientRect();
        glow.style.left = (rect.left + rect.width / 2) + 'px';
        glow.style.top = (rect.top + rect.height / 2) + 'px';
    }
    window.addEventListener('resize', alignGlow);
    setTimeout(alignGlow, 500);

    // --- INIT WIDGET ---
    widget.bind(SC.Widget.Events.READY, function() {
        if (isPlaying) widget.play();
    });
    
    widget.bind(SC.Widget.Events.FINISH, nextTrack);

    // --- POPOLA SCROLLER ---
    playlists.forEach((_, i) => {
        const div = document.createElement('div');
        div.className = 'cd-item';
        const img = document.createElement('img');
        img.src = `img/playlist_${i + 1}.png`;
        img.dataset.index = i;
        img.className = 'cd-img';
        img.draggable = false;
        div.appendChild(img);
        scroller.appendChild(div);
    });

    // --- FUNZIONE CARICAMENTO ---
    function loadTrack(plIdx, sIdx) {
        const song = playlists[plIdx].songs[sIdx];
        trackTitle.innerText = song.title;

        // Su Safari iOS il widget.load con auto_play:true funziona se l'utente ha sbloccato l'audio PRIMA
        widget.load(song.url, {
            auto_play: true,
            show_artwork: false,
            buying: false, liking: false, download: false, 
            sharing: false, show_comments: false, show_user: false
        });

        // Cambio icone e stati subito, senza aspettare trigger lenti
        isPlaying = true;
        if (playIcon) playIcon.src = 'img/pause.png';
        const cd = document.getElementById('spinningCd');
        if (cd) cd.classList.remove('paused');
    }

    // --- SBLOCCO POPUP (Funziona come prima) ---
    function unlockAndStart() {
        audioUnlocked = true;
        permPopup.style.display = 'none';

        if (currentPlaylistIdx !== -1) {
            loadTrack(currentPlaylistIdx, currentSongIdx);
            // Il trucco di prima: forziamo il widget a rimettersi in moto sul click
            setTimeout(() => widget.play(), 500);
        }
    }

    permBtn.addEventListener('click', unlockAndStart);
    permBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        unlockAndStart();
    });

    function insertCD(index) {
        currentPlaylistIdx = parseInt(index);
        currentSongIdx = 0;
        activeWrapper.innerHTML = `<img src="img/playlist_${currentPlaylistIdx + 1}.png" id="spinningCd">`;
        
        if (!audioUnlocked) {
            permPopup.style.display = 'flex';
        } else {
            loadTrack(currentPlaylistIdx, currentSongIdx);
        }
        alignGlow();
    }

    // --- CONTROLLI ---
    playBtn.addEventListener('click', () => {
        if (currentPlaylistIdx === -1) return;
        if (isPlaying) {
            widget.pause();
            isPlaying = false;
            playIcon.src = 'img/play.png';
            document.getElementById('spinningCd')?.classList.add('paused');
        } else {
            isPlaying = true;
            playIcon.src = 'img/pause.png';
            document.getElementById('spinningCd')?.classList.remove('paused');
            widget.play();
        }
    });

    function nextTrack() {
        if (currentPlaylistIdx === -1) return;
        currentSongIdx = (currentSongIdx + 1) % playlists[currentPlaylistIdx].songs.length;
        loadTrack(currentPlaylistIdx, currentSongIdx);
    }

    function prevTrack() {
        if (currentPlaylistIdx === -1) return;
        currentSongIdx = (currentSongIdx - 1 + playlists[currentPlaylistIdx].songs.length) % playlists[currentPlaylistIdx].songs.length;
        loadTrack(currentPlaylistIdx, currentSongIdx);
    }

    document.getElementById('nextBtn').addEventListener('click', nextTrack);
    document.getElementById('prevBtn').addEventListener('click', prevTrack);

    // --- DRAG & DROP ---
    function startDrag(e) {
        const target = e.target.closest('.cd-img');
        if (!target) return;
        if (e.type === 'touchstart') e.preventDefault();
        isDragging = true;
        dragClone = target.cloneNode(true);
        dragClone.id = 'draggingCD';
        document.body.appendChild(dragClone);
        target.classList.add('hidden');
        overlay.classList.add('active'); // Mantiene overlay nero
        glow.classList.add('active');
        dragClone.dataset.tempIndex = target.dataset.index;
        alignGlow();
        moveDrag(e);
    }

    function moveDrag(e) {
        if (!isDragging || !dragClone) return;
        const x = e.touches ? e.touches[0].clientX : e.clientX;
        const y = e.touches ? e.touches[0].clientY : e.clientY;
        dragClone.style.left = `${x - 70}px`;
        dragClone.style.top = `${y - 70}px`;
    }

    function endDrag(e) {
        if (!isDragging || !dragClone) return;
        const x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
        const y = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
        const rect = dropZone.getBoundingClientRect();
        
        if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
            insertCD(dragClone.dataset.tempIndex);
        }
        
        document.querySelectorAll('.cd-img').forEach(img => img.classList.remove('hidden'));
        dragClone.remove();
        dragClone = null;
        isDragging = false;
        overlay.classList.remove('active');
        glow.classList.remove('active');
    }

    scroller.addEventListener('touchstart', startDrag, { passive: false });
    window.addEventListener('touchmove', moveDrag, { passive: false });
    window.addEventListener('touchend', endDrag);
    scroller.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', moveDrag);
    window.addEventListener('mouseup', endDrag);
});
