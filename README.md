# Double Focus — Site vitrine
## Structure du projet

```
doublefocus/
├── index.html        ← Page principale (tout le contenu)
├── css/
│   └── style.css     ← Tous les styles (couleurs, polices, layout)
├── js/
│   └── main.js       ← Interactions (formulaire, modal vidéo, navbar)
├── images/           ← Mettez vos photos ici
│   ├── film-main.jpg     (miniature du film principal)
│   ├── film-2.jpg
│   ├── film-3.jpg
│   ├── film-4.jpg
│   ├── film-5.jpg
│   └── about.jpg         (photo de vous deux)
└── videos/           ← Optionnel : vidéo de fond du hero
    └── showreel.mp4
```

## Comment personnaliser

### 1. Textes — dans index.html
Recherchez les commentaires `<!-- ✏️ -->` pour trouver
les zones à modifier (noms, prix, descriptions).

### 2. Vos vidéos YouTube
Dans index.html, remplacez les `ID_ICI` par vos vrais IDs YouTube.
Ex : pour https://youtube.com/watch?v=dQw4w9WgXcQ
→ l'ID est `dQw4w9WgXcQ`

### 3. Vos photos
Placez vos images dans le dossier `images/`
avec les noms indiqués dans le tableau ci-dessus.

### 4. Couleurs — dans css/style.css
Modifiez les variables au début du fichier :
- `--gold` : la couleur dorée principale
- `--dark` : le fond noir

### 5. Nombre de places restantes
Dans index.html, section urgency-banner :
- `class="slot taken"` = place prise
- `class="slot open"` = place libre

## Mettre en ligne (gratuit)

### Option A — Netlify (recommandé, le plus simple)
1. Allez sur https://netlify.com
2. Créez un compte gratuit
3. Glissez-déposez votre dossier `doublefocus/` sur la page
4. Votre site est en ligne en 30 secondes !
5. Vous pouvez connecter votre propre domaine (doublefocus.fr)

### Option B — GitHub Pages
1. Créez un compte sur https://github.com
2. Nouveau repository → glissez vos fichiers
3. Settings → Pages → Branch: main
4. Votre site est en ligne sur username.github.io/doublefocus

## Modifier avec VS Code
- Installez l'extension "Live Server" dans VS Code
- Clic droit sur index.html → "Open with Live Server"
- Le navigateur se met à jour automatiquement à chaque sauvegarde
