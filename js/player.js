window.addEventListener('load', init)
const $ = (id) => document.getElementById(id)

class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        // console.log('in favorite albums')
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }

    // return array albums in jukebox
    get(){
        return this.albums
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }

    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
    // create a method to return the artist and tite combination
    get(){

        return (this.artist + '/' +this.title)
    }
}

function loadSelectList(jbox){
    let jboxList = jbox.get()
    jboxList.forEach(album => {
        albumItem = album.get()
        let el = document.createElement("option")
        el.textContent = albumItem
        el.value = albumItem
        // console.log(albumItem)
        $('albumPick').appendChild(el)
    })
}

// declaring jbox as variable with global access in all methods and functions
var jbox 
function init(){
    //assign instance of jukebox to jbox
    jbox = new Jukebox()
    //create new album instances
    const album1 = new Album('Operation Ivy', 'Energy')
    const album2 = new Album('Blink 182', 'Dude Ranch')
    const album3 = new Album('New Found Glory', 'Sticks and Stones')
    const album4 = new Album('Taylor Swift', 'Red')

    // calling addAlbum to add album instances (parameters)to the jukebox.
    jbox.addAlbum(album1)
    jbox.addAlbum(album2)
    jbox.addAlbum(album3)
    jbox.addAlbum(album4)

// console.log('in init after adding albums to class' + jbox)
//load artist/album list in select options
    loadSelectList(jbox)
//     let jboxList = jbox.get()
//     jboxList.forEach(album => {
//     albumItem = album.get()
//     let el = document.createElement("option")
//     el.textContent = albumItem
//     el.value = albumItem
//     // console.log(albumItem)
//     $('albumPick').appendChild(el)
// })
}

$('playRecord').addEventListener('click',() =>{
    let record = document.querySelector('#albumPick').value;
    // console.log(record)
    let jboxList = jbox.get()
    jboxList.forEach(album => {
        albumItem = album.get()
        if (albumItem == record){
            album.play()
        }

    })
});


$('favoriteAlbum').addEventListener('click', () => {
    // console.log('calling favotiteALbum')
    alert(`Your favorite album is: ${jbox.favoriteAlbum()}`)

})