<template>



    <form id="main" v-cloak>

        <div class="hero">
            <h1>Ron Swanson on Life</h1>
            <img v-bind:src="imagePath"/>
        </div>

        <div class="bar">
            <!-- Create a binding between the searchString model and the text field -->

            <input type="text" v-model="searchString" placeholder="Enter your search terms" />
        </div>

        <ul>
            <!-- Render a li element for every entry in the computed filteredArticles array. -->

            <li v-for="article in filteredArticles">
                
                <p>{{article}}</p>
            </li>
        </ul>
    </form>
</template>

<script>
    export default {
    name: 'Search',
    data () {
        return {
            searchString: "",

            imagePath: '/static/images/ron.jpg',

            results: [
                "Suggested searches: man, whiskey, bacon, never ..."
            ],
            // The data model. These items would normally be requested via AJAX,
            // but are hardcoded here for simplicity.

            articles: [
                "Clear alcohols are for rich women on diets.",
                "Crying: acceptable at funerals and the Grand Canyon.",
                "I call this turf ‘n’ turf. It's a 16 oz T-bone and a 24 oz porterhouse. Also, whiskey and a cigar. I am going to consume all of this at the same time because I am a free American.",
                "Under my tutelage, you will grow from boys to men. From men into gladiators. And from gladiators into Swansons.",
                "I'm a simple man. I like pretty, dark-haired women, and breakfast food.",
                "Never half-ass two things. Whole-ass one thing.",
                "[On bowling] Straight down the middle. No hook, no spin, no fuss. Anything more and this becomes figure skating.",
                "I don't want to paint with a broad brush here, but every single contractor in the world is a miserable, incompetent thief.",
                "Fishing relaxes me. It's like yoga, except I still get to kill something.",
                "No home is complete without a proper toolbox. Here's April and Andy's: A hammer, a half eaten pretzel, a baseball card, some cartridge that says Sonic and Hedgehog, a scissor half, a flashlight filled with jellybeans.",
                "Just give me all the bacon and eggs you have. Wait...wait. I worry what you just heard was: Give me a lot of bacon and eggs. What I said was: Give me all the bacon and eggs you have. Do you understand?",
                "When people get a little too chummy with me I like to call them by the wrong name to let them know I don't really care about them.",
                "There's only one thing I hate more than lying: skim milk. Which is water that's lying about being milk.",
                "The government is a greedy piglet that suckles on a taxpayer's teat until they have sore, chapped nipples.",
                "The less I know about other people's affairs, the happier I am. I'm not interested in caring about people. I once worked with a guy for three years and never learned his name. Best friend I ever had. We still never talk sometimes.",
                "When I eat, it is the food that is scared.",
                "My only official recommendations are US Army-issued mustache trimmers, Morton's Salt, and the C.R. Lawrence Fein two inch axe-style scraper oscillating knife blade.",
                "Are you going to tell a man that he can't fart in his own car?",
                "Turkey can never beat cow.",
                "It's always a good idea to demonstrate to your coworkers that you are capable of withstanding a tremendous amount of pain.",
                "There are three acceptable haircuts: high and tight, crew cut, buzz cut.",
                "Capitalism: God's way of determining who is smart and who is poor.",
                "Any dog under fifty pounds is a cat and cats are useless.",
                "Fish, for sport only, not for meat. Fish meat is practically a vegetable.",
                "There is only one bad word: taxes.",
                "History began July 4th, 1776. Anything before that was a mistake.",
                "Cultivating a manly musk puts opponent on notice.",
                "Give a man a fish and feed him for a day. Don't teach a man to fish… and feed yourself. He's a grown man. And fishing's not that hard.",
                "Child labor laws are ruining this country.",
                "Great job, everyone. The reception will be held in each of our individual houses, alone.",
                "America: The only country that matters. If you want to experience other ‘cultures,’ use an atlas or a ham radio.",
                "The key to burning an ex-wife effigy is to dip it in paraffin wax and then toss the flaming bottle of isopropyl alcohol from a safe distance. Do not stand too close when you light an ex-wife effigy.",
                "There are only three ways to motivate people: money, fear, and hunger.",
                "Shorts over six inches are capri pants, shorts under six inches are European.",
                "Friends: one to three is sufficient.",
                "Breakfast food can serve many purposes.",
                "Honor: if you need it defined, you don't have it.",
                "One rage every three months is permitted. Try not to hurt anyone who doesn't deserve it.",
                "Strippers do nothing for me…but I will take a free breakfast buffet anytime, anyplace.",
                "I like saying ‘No,’ it lowers their enthusiasm.",
                "You had me at meat tornado.",
                "There must be a mistake, you've accidentally given me the food that my food eats.",
                "Son, there is no wrong way to consume alcohol.",
                "Keep your tears in your eyes where they belong.",
                "I've cried twice in my life. Once when I was seven and hit by a school bus. And then again when I heard that Li'l Sebastian has passed.",
                "I hate everything.",
                "I love nothing.",
                "I love riddles!",
                "Don't waste energy moving unless necessary.",
                "I'll take that steak to go. Please and thank you.",
                "Creativity is for people with glasses who like to lie.",
                "Children are terrible artists and artists are crooks.",
                "Tom put all my records into this rectangle!",
                "I believe luck is a concept invented by the weak to explain their failures.",
                "What's cholesterol?",
                "People who buy things are suckers.",
                "I'm going to get 12 eggs and part of a dead animal. Dealer's choice. Please and thank you.",
                "What the f*ck is a German muffin?!?",
                "I wanna punch you in the face so bad right now."
            ]
      }
    },
    computed: {
        // A computed property that holds only those articles that match the searchString.
        filteredArticles: function () {
            var articles_array = this.articles,
                searchString = this.searchString,
                results = this.results;

            if(!searchString){
                return results;
            }

            searchString = searchString.trim().toLowerCase();

            results = articles_array.filter(function(item){
                if(item.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })

            if (results.length === 0){
                    results.push("No results found for " + searchString)
            }

            // Return an array with the filtered data.
            return results;
        }
    }
  
}
</script>

<style>
/* Hide un-compiled mustache bindings
until the Vue instance is ready */

[v-cloak] {
  display: none;
}

*{
    margin:0;
    padding:0;
}

body{
    font:15px/1.3 'Open Sans', sans-serif;
    color: #5e5b64;
    text-align:center;
}

a, a:visited {
    outline:none;
    color:#389dc1;
}

a:hover{
    text-decoration:none;
}

section, footer, header, aside, nav{
    display: block;
}

/*-------------------------
    The search input
--------------------------*/

.bar{
    background-color:#5c9bb7;

    background-image:-webkit-linear-gradient(top, #5c9bb7, #5392ad);
    background-image:-moz-linear-gradient(top, #5c9bb7, #5392ad);
    background-image:linear-gradient(top, #5c9bb7, #5392ad);

    box-shadow: 0 1px 1px #ccc;
    border-radius: 2px;
    width: 400px;
    padding: 14px;
    margin: 45px auto 20px;
    position:relative;
}

.bar input{
    background:#fff no-repeat 13px 13px;
    background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU5NEY0RTlFMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU5NEY0RTlGMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTk0RjRFOUMxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTk0RjRFOUQxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DjA/RAAABK0lEQVR42pTSQUdEURjG8dOY0TqmPkGmRcqYD9CmzZAWJRHVRIa0iFYtM6uofYaiEW2SRJtEi9YxIklp07ZkWswu0v/wnByve7vm5ee8M+85zz1jbt9Os+WiGkYdYxjCOx5wgFeXUHmtBSzpcCGa+5BJTCjEP+0nKWAT8xqe4ArPGEEVC1hHEbs2oBwdXkM7mj/JLZrad437sCGHOfUtcziutuYu2v8XUFF/4f6vMK/YgAH1HxkBYV60AR31gxkBYd6xAeF3VzMCwvzOBpypX8V4yuFRzX2d2gD/l5yjH4fYQEnzkj4fae5rJulF2sMXVrAsaTWttRFu4Osb+1jEDT71/ZveyhouTch2fINQL9hKefKjuYFfuznXWzXMTabyrvfyIV3M4vhXgAEAUMs7K0J9UJAAAAAASUVORK5CYII=);

    border: none;
    width: 100%;
    line-height: 19px;
    padding: 11px 0;

    border-radius: 2px;
    box-shadow: 0 2px 8px #c4c4c4 inset;
    text-align: left;
    font-size: 14px;
    font-family: inherit;
    color: #738289;
    font-weight: bold;
    outline: none;
    text-indent: 40px;
}

ul{
    list-style: none;
    width: 428px;
    margin: 0 auto;
    text-align: left;
}

ul li{
    border-bottom: 1px solid #ddd;
    padding: 10px;
    overflow: hidden;
}

ul li img{
    width:60px;
    height:60px;
    float:left;
    border:none;
}

ul li p{
    margin-left: 75px;
    font-weight: bold;
    padding-top: 12px;
    color:#6e7a7f;
}

img {
    max-width: 35%;
}

</style>