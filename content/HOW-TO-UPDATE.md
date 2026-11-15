# How to update the Pointlab sites

Everything you see on the sites (texts, pictures, videos, project order) lives in this `content/` folder.
Change the files, push to GitHub, and the site updates by itself within about 1–3 minutes. No code, no AI needed.

## The folders

```
content/
  shared.txt                      contact list (right ||| panel, every site)
  we-are-the-nature/              one folder per site
    site.txt                      site name, wordmark, intro, artist, top-page texts
    top.jpg                       (optional) picture or video behind the wordmark
    001_Lapland-Winter/           one folder per project; 001 = first project
      project.txt                 project name, facts, tags, links, description, slide texts
      01.jpg                      slide 1
      02.mp4                      slide 2 (video)
      02.jpg                      poster for 02.mp4 (still shown while the video loads)
      03.webp                     slide 3
    002_Forest-Film/
      ...
  works/
  system8/
    001_System-8/                 row 1 = the concept + promo video
    002_App-1/                    row 2 = App 1; its numbered files are its pages
  ...
```

- **Project order** = the folder number: `001_`, `002_`, `003_` … Rename `003_` to `001_` to move it first
  (give the old `001_` a new number too). Gaps are fine (`010_`, `020_` leaves room).
- **Slide order** = the file number: `01.jpg`, `02.mp4`, `03.png` … A name after the number is fine: `01_wall.jpg`.
- **Hide** a project or file: put `_` in front of its name (`_004_Draft`). Files starting with `.` are ignored.
- Picture types: jpg, jpeg, png, webp, gif, avif, svg. Video types: mp4 (best), webm, mov.
- Video poster: an image with the same number as the video (`02.jpg` next to `02.mp4`) or `02-poster.jpg`.

## Replace a picture or video

Drop the new file in with **exactly the same name** (`03.jpg` replaces `03.jpg`). That is all.
After the push the site shows the new file (browsers are told it changed).
Changing the type (e.g. `03.jpg` → `03.png`) also works: delete the old one, add the new one.

## Add a project

1. Copy an existing project folder, e.g. `002_Forest-Film` → `003_Glacier`.
2. Replace the pictures and videos with your own, numbered `01`, `02`, `03` …
3. Edit `project.txt` (below). Done.

A project shown on another site via tags is **not** copied: see Tags.

## project.txt

```
Name: Lapland Winter
Year: 2026
Client: Visit Lapland
Role: Drone film · photography
Tags: photography, commercial film
Settings: autoplay
Layout: full
Link: Watch the film -> 02.mp4
Link: Client site -> https://example.com
Link: Credits

The description shown in the left ≡ panel. Write as many lines as you like.
A blank line starts a new paragraph.

# 01 Fell at dawn
Short caption for slide 01 (shown in the Notes list, never over the picture).

# 02 Film
Layout: whole

The film, shown whole instead of cropped.
```

- The top lines are `Key: value`. Then **one blank line**, then the description.
- `Name` is the title. Any other key you invent (Year, Client, Role, Venue, Status …) is shown as a fact in the left panel, in the order you write them.
- Keys with a special meaning:
  - `Tags:` comma list, e.g. `photography, commercial film`.
  - `Link:` one line per link: `Label -> target`. Target can be a file in the folder (`02.mp4`), a page, or a web address. No target = shown as "placeholder".
  - `Settings:` `autoplay` (visitor can switch video autoplay off) and/or `whole` (visitor can show pictures uncropped).
  - `Layout:` how pictures are shown in this project: `full` (fills the screen), `framed` (whole picture in a frame), `framed fill` (frame filled, cropped).
  - `Price:` / `Buy link:` / `Buy label:` the Get row (Asset Store).
  - `Cover image:` / `Cover line:` Codelab only: the picture and rotating lines on the project's animated first page.
  - `Accent:` hub only: the colour of that project's page.
- Slide texts: a line `# 01 Title` (the number matches the file), then optional keys, then a blank line and the caption.
  Slide keys: `Layout:` (as above; for videos `whole` = not cropped), `Kicker:` small label, `Alt:` text for screen readers.
- Text-only pages: a `# 05 …` block with no file and `Layout: text` (heading + paragraphs), `Layout: concept`
  (big title; extra `Key: value` lines become its facts), `Layout: notes` (list of the slide captions) or `Layout: sites` (hub site tiles).
  A `|` in a title is a line break: `# 01 Words | worn`.
- Live app or embed (YouTube, Vimeo, an app): `# 02 Try it` + `App: apps/field-toy.html` or `App: https://player.vimeo.com/video/…`.
  A big video stored elsewhere: `Video: https://…/film.mp4` in the slide block.
- `# Help` block: text shown in the left panel's Help group (System 8).
- News (hub `002_News`): `Kind: news`; each `# 01 Title` block is an article with `Date: 10.11.2026`, `Lede:`, `Alt:`; picture = `01.jpg`.
- Letters like ä ö å and emoji are fine (save files as UTF-8, which is the default on a Mac).

## site.txt

```
Name: We Are The Nature
Role: Photography · nature film          (shown in the Sites lists)
Page title: We Are The Nature            (browser tab)
Wordmark: WE ARE | THE NATURE            (| = line break, [LAB] = second style, e.g. POINT[LAB])
Intro: One line about the site.
Artist: Andy Point
Artist role: Photography · film
Artist bio: Two or three lines.
Thumbnail: 001_Lapland-Winter/01.jpg     (picture in the Sites lists; default = first picture)

Paragraphs here appear in About (right panel) and on the top page's left panel.
```

Also possible: `Top line:` (Codelab rotating lines on the top page), `Edge top/right/bottom/left:` (Codelab edge texts),
`Campaign status:`, `Launch:`, `Kickstarter: Coming to Kickstarter -> https://www.kickstarter.com/…` (System 8),
`Label full: Still` (names used for untitled slides). A file `portrait.jpg` in the site folder fills the artist portrait;
`top.jpg` or `top.mp4` puts a picture or video behind the wordmark (instead of the drawn top page).

## Tags: one project on several sites

A project lives in one folder only. Works shows its own folders **plus** every project on any other site whose
`Tags:` include one of the tags in `content/works/site.txt`:

```
Include tags: brand identity, graphic design, typography, illustration, photography, commercial film
Tag filter: Discipline
```

So tagging a We Are The Nature project `commercial film` puts it on Works automatically (no copy, no duplicate files).
`Tag filter:` adds the filter buttons in the right-panel Projects group. Use any tag words you like; matching ignores capitals.

## Push → automatic update

1. Change files in `content/`.
2. Commit and push to GitHub (GitHub Desktop: write a summary → Commit → Push origin).
3. GitHub runs "Build content and deploy" (tab **Actions**). Green tick = live. Red cross = open it to read why.
4. The robot then adds a small commit "Update content manifest [skip ci]". **Before your next change, pull/fetch first**
   (GitHub Desktop: Fetch origin → Pull) so your copy has it.

## Build locally (optional)

To preview on your own computer before pushing (needs Node.js 18+, nothing to install):

```
node tools/build-content.mjs
```

Then open `index.html` (or any page) in the browser. The script also prints notes about files it could not use
(no number, unknown type, duplicate numbers).

## Recommended sizes

- Full-screen pictures: JPG or WebP, long edge 2400–3000 px, ~300–800 KB each.
- Framed pictures / screenshots: long edge 1600–2000 px.
- Videos: MP4 (H.264, AAC or no sound), 1920×1080 (or 2560 for drone hero films), 8–12 Mbit/s,
  ideally under 20 MB, never over 100 MB (GitHub's file limit). For longer films use Vimeo/YouTube via `App:` or `Video: https://…`.
- Posters: same size as the video frame, JPG ~200 KB.
- Keep the whole repository under ~1 GB (GitHub Pages limit).
