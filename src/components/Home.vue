<template>
    <div class="home">
        <h1>SBNG</h1>
        <p class="ingress mb-4">{{ welcome }}</p>
        <div class="d-flex justify-content-center align-items-center mb-4">
            <button @click="runBandName" type="button" class="btn btn-lg btn-primary">Generate Band Name</button>
        </div>
        <transition name="coolbandnameappears-classes-transition" enter-active-class="animated zoomInUp faster"
            leave-active-class="animated zoomOutDown faster" mode="out-in">
            <p class="currCoolBandName" v-show="bandnameappears">{{ coolBandName }}</p>
        </transition>
    </div>
</template>

<script>
    import {
        dbCoolWords
    } from '../firebaseConfig'

    export default {
        name: "home",
        data() {
            return {
                welcome: "Super Band Name Generator",
                coolwords: [],
                coolBandName: "",
                bandnameappears: false,
                clickable: false
            }
        },
        methods: {
            runBandName() {
                if (this.clickable == true) {
                    if (this.bandnameappears == false) {
                        this.generateBandName();
                    } else {
                        this.generateBandName();
                    }
                }
            },
            generateBandName() {
                let maxCoolLength = this.coolwords.length - 1;
                let ordet = this.coolwords[Math.floor(Math.random() * (maxCoolLength - 0 + 1)) + 0];
                let ordet2 = this.coolwords[Math.floor(Math.random() * (maxCoolLength - 0 + 1)) + 0];
                this.bandnameappears = true;
                this.coolBandName = ordet + ' ' + ordet2;
            },
            readCoolWords() {
                let self = this;
                this.coolwords = [];
                dbCoolWords.once('value').then(function (snapshot) {

                    snapshot.forEach(function (childSnapshot) {
                        self.coolwords.push(
                            childSnapshot.val().coolword
                        )
                    });
                }).then(function () {
                    self.clickable = true;
                })

                console.log(this.coolwords);
            }
        },
        mounted: function () {
            this.readCoolWords()
        }
    }
</script>

<style>
    .currCoolBandName {
        background-color: #333;
        font-weight: 500;
        color: white;
        padding: 1rem;
        background: radial-gradient(circle 858.6px at 10% 20%, rgba(118, 5, 54, 1) 0%, rgba(238, 129, 167, 1) 90%);
        font-size: 2rem;
    }
</style>