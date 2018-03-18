<template>



    <form id="main" v-cloak>

        <div class="hero">
            <h1>Gandhi on Life</h1>
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

            imagePath: '/static/images/gandhi.jpg',

            results: [],
            
            // The data model. These items would normally be requested via AJAX,
            // but are hardcoded here for simplicity.

            articles: [
                  "That service is the noblest which is rendered for its own sake.",
                 "Happiness is when what you think, what you say, and what you do are in harmony.", 
                 "We may stumble and fall but shall rise again; it should be enough if we did not run away from the battle.",
                 "Prayer is not asking. It is a longing of the soul. It is daily admission of one’s weakness. It is better in prayer to have a heart without words than words without a heart.",
                 "It is health that is real wealth and not pieces of gold and silver.",
                 "Strength does not come from physical capacity. It comes from an indomitable will.",
                 "Power is of two kinds. One is obtained by the fear of punishment and the other by acts of love. Power based on love is a thousand times more effective and permanent then the one derived from fear of punishment.",
                 "Non-violence is the greatest force at the disposal of mankind. It is mightier than the mightiest weapon of destruction devised by the ingenuity of man.",
                 "A ‘No’ uttered from the deepest conviction is better than a ‘Yes’ merely uttered to please, or worse, to avoid trouble.",
                 "If I have the belief that I can do it, I shall surely acquire the capacity to do it even if I may not have it at the beginning.",
                 "Love is the strongest force the world possesses, yet it is the humblest imaginable.",
                 "Faith is put to the test when the situation is most difficult.",
                 "Faith becomes lame, when it ventures into matters pertaining to reason!",
                 "We need not wait to see what others do.",
                 "To deprive a man of his natural liberty and to deny to him the ordinary amenities of life is worse than starving the body; it is starvation of the soul, the dweller in the body.",
                 "Whenever you are confronted with an opponent, conquer him with love.",
                 "Anger is the enemy of non-violence and pride is a monster that swallows it up.",
                 "A man is the sum of his actions, of what he has done, of what he can do, nothing else.",
                 "I have nothing new to teach the world. Truth and Non-violence are as old as the hills. All I have done is to try experiments in both on as vast a scale as I could.",
                 "One needs to be slow to form convictions, but once formed they must be defended against the heaviest odds.",
                 "If patience is worth anything, it must endure to the end of time. And a living faith will last in the midst of the blackest storm.", 
                 "You may never know what results come of your actions, but if you do nothing, there will be no results.",
                 "We may never be strong enough to be entirely nonviolent in thought, word and deed. But we must keep nonviolence as our goal and make strong progress towards it.",
                 "I am a humble but very earnest seeker after truth.",
                 "Intolerance is itself a form of violence and an obstacle to the growth of a true democratic spirit.",
                 "When I admire the wonders of a sunset or the beauty of the moon, my soul expands in the worship of the creator.",
                 "Nothing has saddened me so much in life as the hardness of heart of educated people.",
                 "As long as you derive inner help and comfort from anything, keep it.",
                 "Faith is not something to grasp, it is a state to grow into.",
                 "I have worshiped woman as the living embodiment of the spirit of service and sacrifice.",
                 "Infinite striving to be the best is man’s duty; it is its own reward.",
                 "Spiritual relationship is far more precious than physical. Physical relationship divorced from spiritual is body without soul.",
                 "Freedom is never dear at any price. It is the breath of life. What would a man not pay for living?",
                 "Those who know how to think need no teachers.",
                 "Each one has to find his peace from within. And peace to be real must be unaffected by outside circumstances.",
                 "All the religions of the world, while they may differ in other respects, unitedly proclaim that nothing lives in this world but Truth.",
                 "If I had no sense of humor, I would long ago have committed suicide.",
                 "Fear has its use but cowardice has none.",
                 "As human beings, our greatness lies not so much in being able to remake the world – that is the myth of the atomic age – as in being able to remake ourselves.",
                "I look only to the good qualities of men. Not being faultless myself, I won’t presume to probe into the faults of others.",
                 "The real love is to love them that hate you, to love your neighbor even though you distrust him.",
                 "Service which is rendered without joy helps neither the servant nor the served.",
                 "It has always been a mystery to me how men can feel themselves honored by the humiliation of their fellow beings.",
                 "A leader is useless when he acts against the promptings of his own conscience.",
                 "To lose patience is to lose the battle.",
                 "The difference between what we do and what we are capable of doing would suffice to solve most of the world’s problem.",
                 "The future depends on what you do today.",
                 "You may never know what results come of your action, but if you do nothing there will be no result.",
                 "No culture can live, if it attempts to be exclusive.",
                 "First they ignore you, then they ridicule you, then they fight you, and then you win.", 
                 "To call woman the weaker sex is a libel; it is man’s injustice to woman.",
                 "The best way to find yourself is to lose yourself in the service of others.",
                 "Satisfaction lies in the effort, not in the attainment. Full effort is full victory.",
                 "Freedom is not worth having if it does not include the freedom to make mistakes.",
                 "I am prepared to die, but there is no cause for which I am prepared to kill.",
                 "You can chain me, you can torture me, you can even destroy this body, but you will never imprison my mind.",
                 "Always aim at complete harmony of thought and word and deed. Always aim at purifying your thoughts and everything will be well.",
                 "Where there is love there is life.", 
                 "The good man is the friend of all living things.",
                 "We but mirror the world. All the tendencies present in the outer world are to be found in the world of our body. If we could change ourselves, the tendencies in the world would also change. As a man changes his own nature, so does the attitude of the world change towards him. This is the divine mystery supreme. A wonderful thing it is and the source of our happiness. We need not wait to see what others do.",
                 "If you want real peace in the world, start with children.",
                 "You must not lose faith in humanity. Humanity is like an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.", 
                 "All humanity is one undivided and indivisible family, and each one of us is responsible for the misdeeds of all the others.",
                 "Nonviolence is a weapon of the strong.",
                 "Distinguish between real needs and artificial wants and control the latter.",
                 "You may never know what results come of your action, but if you do nothing there will be no result.",
                 "My life is my message.",
                 "Earth provides enough to satisfy every man’s needs, but not every man’s greed.",
                 "The difference between what we do and what we are capable of doing would suffice to solve most of the world’s problem.",
                 "One can measure the greatness and the moral progress of a nation by looking at how it treats its animals.",
                 "A small body of determined spirits fired by an unquenchable faith in their mission can alter the course of history.",
                 "Your beliefs become your thoughts, your thoughts become your words, Your words become your actions, Your actions become your habits, Your habits become your values, Your values become your destiny.",
                 "I wish to change their minds, not kill them for weaknesses we all poses.",
                 "Intolerance is itself a form of violence and an obstacle to the growth of a true democratic spirit.",
                 "A man is but the product of his thoughts. What he thinks, he becomes.",
                 "Love is the strongest force the world possesses.",
                 "Whatever you do will be insignificant, but it is very important that you do it.", 
                 "An error does not become truth by reason of multiplied propagation, nor does truth become error because nobody sees it.",
                 "The weak can never forgive. Forgiveness is the attribute of the strong.",
                 "God has no religion.", 
                 "To believe in something, and not to live it, is dishonest.",
                 "An ounce of practice is worth more than tons of preaching.",
                 "The hardest heart and the grossest ignorance must disappear before the rising sun of suffering without anger and without malice.",
                 "Change yourself – you are in control.",
                 "It is unwise to be too sure of one’s own wisdom. It is healthy to be reminded that the strongest might weaken and the wisest might err.",
                "Live as if you were to die tomorrow. Learn as if you were to live forever.",
                 "I will not let anyone walk through my mind with their dirty feet.", 
                 "In a gentle way, you can shake the world.",
                 "An eye for an eye will only make the whole world blind.", 
                 "The greatness of humanity is not in being human, but in being humane.",
                 "Man’s nature is not essentially evil. Brute nature has been known to yield to the influence of love. You must never despair of human nature.",
                 "Purity of personal life is the one indispensable condition for building up a sound education.",
                 "Man becomes great exactly in the degree in which he works for the welfare of his fellow-men.",
                 "Increase of material comforts, it may be generally laid down, does not in any way whatsoever conduce to moral growth.",
                 "The main purpose of life is to live rightly, think rightly, act rightly. The soul must languish when we give all our thought to the body.",
                 "Glory lies in the attempt to reach one’s goal and not in reaching it.",
                 "Everyone who wills can hear the inner voice. It is within everyone.",
                 "Hate the sin, love the sinner.",
                 "The state represents violence in a concentrated and organized form. The individual has a soul, but as the state is a soulless machine, it can never be weaned from violence to which it owes its very existence."
            ]
      }
    },
    computed: {
        // A computed property that holds only those articles that match the searchString.
        filteredArticles: function () {
            var articles_array = this.articles,
                searchString = this.searchString,
                results = [];

            if(!searchString){
                results.push("Suggested searches: happiness, health, peace ...")
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