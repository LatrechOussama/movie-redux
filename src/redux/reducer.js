import { ADDMOVIE, DELETEMOVIE, EDITMOVIE } from "./actionTypes";

const movie ={
    movies : [

        {
        id: Math.random(),
        image :"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg",
        rating: 5,
        name : "Iron Man",
        date : "Mars 2021",
        cover :"https://www.google.com/url?sa=i&url=https%3A%2F%2Ffbcoverstreet.com%2Fcovers%2Fironman&psig=AOvVaw3skteFMEausBF5ResxYpbx&ust=1643884729751000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCR3f3p4PUCFQAAAAAdAAAAABAD",
        summary:"A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism",
        typee:"actin",
        duration:"2h04min"
        },
        {
            id: Math.random(),
            image :"https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg",
            rating: 4,
            name : "AntMan",
            date : "April 2020",
            cover :"https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.facebook.com%2Fantman%2Fphotos%2Fa.515448248482320%2F3351511994875917%2F%3Ftype%3D3%26source%3D44&psig=AOvVaw0gEMZqKM2WCWLF-VS9gjjQ&ust=1643884817830000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODI_anq4PUCFQAAAAAdAAAAABAD",
            summary:"Forced out of his own company by former protégé Darren Cross, Dr. Hank Pym (Michael Douglas) recruits the talents of Scott Lang (Paul Rudd), a master thief just released from prison. Lang becomes Ant-Man, trained by Pym and armed with a suit that allows him to shrink in size, possess superhuman strength and control an army of ants. The miniature hero must use his new skills to prevent Cross, also known as Yellowjacket, from perfecting the same technology and using it as a weapon for evil.",
            typee:"comedy",
            duration:"1h58min"
            },
            {
                id: Math.random(),
                image :"https://m.media-amazon.com/images/I/816lSwMb2dL.jpg",
                rating: 3,
                name : "John Wick",
                date : "Juin 2019",
                cover :"https://timelinecovers.pro/facebook-cover/download/john-wick-chapter-2-facebook-cover.jpg",
                summary:"Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.",
                typee:"action",
                duration:"1h50min"
                },
                {
                    id: Math.random(),
                    image :"https://maxcdn.icons8.com/app/uploads/2019/05/poster-for-movie.png",
                    rating: 4,
                    name : "Harry Potter",
                    date : "August 2008",
                    cover :"https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.trendycovers.com%2Fcovers%2FHarry%2BPotter-65&psig=AOvVaw1aSPqZ51jvxQX5PE70WIID&ust=1643884994094000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi_q_zq4PUCFQAAAAAdAAAAABAD",
                    summary:"Without the guidance and protection of their professors, Harry (Daniel Radcliffe), Ron (Rupert Grint) and Hermione (Emma Watson) begin a mission to destroy the Horcruxes, the sources of Voldemort's immortality. Though they must rely on one another more than ever, dark forces threaten to tear them apart. Voldemort's Death Eaters have seized control of the Ministry of Magic and Hogwarts, and they are searching for Harry -- even as he and his friends prepare for the ultimate showdown.",
                    typee:"mystery",
                    duration:"3h02min"
                    },
                    {
                        id: Math.random(),
                        image :"https://cdn.europosters.eu/image/1300/posters/the-lord-of-the-rings-the-return-of-the-king-i104633.jpg",
                        rating: 2,
                        name : "The Lord Of The Rings",
                        date : "Mars 2021",
                        cover :"https://i.pinimg.com/originals/35/bd/a4/35bda4d45adedb6e097dc3038f937117.jpg",
                        summary:"The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged.",
                        typee:"adventure",
                        duration:"3h15min"
                        }]
}

export const movieReducer=(state=movie,{type,payload})=>{

    switch (type) {
        case DELETEMOVIE:
            
          return{
              ...state,movies:state.movies.filter(el=>el.id!==payload)
          }
          case ADDMOVIE :
              return{
                  ...state,movies:[...state.movies,payload]
              }
         case EDITMOVIE:
             return{
                 ...state,movies:state.movies.map(el=>el.id===payload.id?payload:el)
             }
        default:
            return state
    }
}