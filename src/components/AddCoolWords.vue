<template>
    <div class="addcoolwords">
        <h1>Add cool words</h1>
        <p class="ingress mb-4">{{ welcome }}</p>
        <div class="row d-flex justify-content-center align-items-center mb-5">
            <div class="col-sm-12 col-md-8 col-lg-6">
                <form @submit.prevent="submitCoolWord">
                    <div class="input-group">
                        <input v-model="coolword" type="text" class="form-control" aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm" :maxlength="max">
                        <div class="input-group-append">
                            <button class="btn btn-info" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <transition name="wordsubmitted-classes-transition" enter-active-class="animated zoomInUp faster"
            leave-active-class="animated zoomOutDown faster" mode="out-in">
            <p class="submittedword" v-show="wordsubmitted">COOL WORD ADDED</p>
        </transition>
    </div>
</template>

<script>
    import {
        dbCoolWords
    } from '../firebaseConfig'

    export default {
        name: "addcoolwords",
        data() {
            return {
                welcome: "Add cool words for band name generator",
                max: 50,
                coolword: "",
                wordsubmitted: false
            }
        },
        methods: {
            submitCoolWord() {
                if (this.coolword.length > 0) {
                    dbCoolWords.push({
                        coolword: this.coolword
                    });
                    this.wordsubmitted = true;
                    setTimeout(this.resetCoolWord, 1000);
                } else {
                    alert("No cool word in input?")
                }
            },
            resetCoolWord() {
                this.coolword = "";
                this.wordsubmitted = false;
            }
        }
    }
</script>

<style>
    .submittedword {
        font-size: 3em;
        background-color: #333;
        padding: 12px;
        color: white;
        font-weight: bold;
        margin: 0 auto;
        width:50%
    }

    @media screen and (max-width: 600px) {
        .submittedword {
        width: 75%;
        font-size: 1em;
    }
    }
</style>