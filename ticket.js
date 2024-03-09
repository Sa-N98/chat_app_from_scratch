const app = Vue.createApp({
                                data(){
                                    return{}
                                        },
                                mounted(){
                                }
                            });

app.component('ticket', {
        template: `
                    <div class="ticket">
                        <div class="ticket_card">
                            <button @click='openChat'>Comment</button>
                            <p>Ticket</p>
                        </div>
                        <div class="chat_window" v-if='chatActive'>
                            <button class="close_button" @click='closeChat'>
                                <span class="X"></span>
                                <span class="Y"></span>
                            </button>
                            <div class="chat_box"></div>
                                <form id="chatInputForm">
                                    <textarea rows="5" cols="60" name="text" id="textInput"></textarea>
                                    <button type="submit" id="textInputButton">Submit</button>
                                </form>
                            </div>
                    </div>
                `,
        data() {
            return {
                  chatActive:false,
                 };
                },
        mounted() {},
        methods: {
            openChat: function(){this.chatActive=true; document.body.style.overflow = 'hidden';},
            closeChat: function(){this.chatActive=false, document.body.style.overflow = 'auto';}
        }
        });


app.mount('#app');



// app.component('ticket', {
//     template: ``,
//     data() {
//         return {};
//             },
    
//     mounted() {},
    
//     methods: {
//                 adjustFontSize: function () {
//                                             const titleLength = this.titleElement.textContent.length;
//                                             const fontSize = 10 - Number(titleLength);
//                                             this.titleElement.style.fontSize = fontSize + 'vw';
//                                             }
//             }
//     });