<template>
    <main>
            <div class="nav-top">
                <div class="burger-nav" @click="$emit('btnBurger')">
                    <span></span>
                </div>
                <div class="logoGabut">
                    <h2>Gabut Social</h2>
                </div>
            </div>
            <div class="main-landing">
                <div class="post-section">
                    <form @submit.prevent="submitPost" class="box-post">
                        <div class="headBox">
                            <h3>Posting Kegabutan</h3>
                        </div>
                        <textarea placeholder="Posting" v-model="posting"></textarea>
                        <div class="btn-post">
                            <button type="submit">Post</button>
                        </div>
                    </form>
                </div>
                <div class="public-post">
                     <div class="post-container" v-for="get in getAllPost" :key="get.id">
                        <div class="profile-poster">
                            <div class="lefts">
                                <img src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg" alt="avtr">
                                 <h3>Federic Daniel</h3>
                            </div>
                            <div class="rights">
                                <span id="show-btn" @click="editt(get)">Edit</span>
                                <span @click="deletePost(get)">Delete</span>
                            </div>
                        </div>
                        <div class="body-post">
                            <h4 style="font-weight: bold">{{get.title}}</h4>
                            <p>{{get.body}}</p>
                        </div>
                        <div class="btn-poster">
                            <div class="btn-comment" v-b-toggle="'collapse-'+get.id">
                                <i class="far fa-comment-dots"></i>
                                <span>Commentar (10)</span>
                            </div>
                        </div>
                        <b-collapse :id="`collapse-${get.id}`">
                        <div class="commentar-section">
                            <div class="commentars">
                                <div class="user-comment">
                                    <h3>Muhamad Irhash</h3>
                                    <span>( irhash@gmail.com )</span>
                                </div>
                                <div class="body-comment">
                                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo porro et, quasi tempore autem nobis dolore. Officia eius vero vitae.</span>
                                </div>
                            </div>

                            <div class="commentars">
                                <div class="user-comment">
                                    <h3>Muhamad Irhash</h3>
                                    <span>( irhash@gmail.com )</span>
                                </div>
                                <div class="body-comment">
                                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo porro et, quasi tempore autem nobis dolore. Officia eius vero vitae.</span>
                                </div>
                            </div>
                        </div>
                        </b-collapse>
                    </div>
                </div>
            </div>
            <b-modal id="bv-modal-example" hide-footer>
                <template v-slot:modal-title>
                Edit Data
                </template>
                <form @submit.prevent="editData">
                    <b-form-input
                id="input-1"
                v-model="datas.title"
                type="text"
                required
                placeholder="Enter Title"
                style="margin-bottom: 15px"
                ></b-form-input>
                <b-form-textarea
                id="textarea"
                v-model="datas.body"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
                ></b-form-textarea>

                <b-button-group style="margin-top: 15px">
                <b-button type="reset" variant="danger">Clear</b-button>
                <b-button type="submit" variant="primary">Submit</b-button>
                </b-button-group>
                </form>
            </b-modal>
        </main>
</template>

<script>
import { mapState } from 'vuex'
import swal from 'sweetalert'

export default {
  name: 'Main',
  data () {
    return {
      postingan: [],
      posting: '',
      modalShow: false,
      datas: {
        title: '',
        body: '',
        dataedit: null
      }
    }
  },
  computed: {
    ...mapState('Post', ['getAllUser', 'getAllPost'])
  },
  methods: {
    submitPost () {
      this.$store.dispatch('Post/submitPost', this.posting).then((result) => {
        this.getAllPost.push(result.data)
        if (result.status === 201) {
          swal('success', 'Data has been Submited!', 'success').then((res) => {
            if (res) this.$router.go()
          })
        }
        console.log(result)
      })
    },
    deletePost (id) {
      swal({
        title: 'Are you sure?',
        text: 'Are you sure that you want to leave this page?',
        icon: 'warning',
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.$store.dispatch('Post/deletePost', id).then((result) => {
            if (result.status === 200) {
              swal('Deleted!', 'Your imaginary file has been deleted!', 'success')
              this.$router.go()
            }
          })
        } else {
        }
      })
    },
    editt (g) {
      this.datas.dataedit = g
      this.$bvModal.show('bv-modal-example')
    },
    editData () {
      this.$store.dispatch('Post/editPost', this.datas).then((result) => {
        console.log(result)
        if (result.status === 200) {
          swal('success', 'Data has been updated!', 'success').then((res) => {
            if (res) this.$bvModal.hide('bv-modal-example')
            if (res) this.$router.go()
          })
        }
      })
    }
  },
  created () {
    this.$store.dispatch('Post/loadAllUser')
    console.log(this.postingan)
    this.$store.dispatch('Post/loadPost')
  }
}
</script>

<style scoped>
main{
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
}

.nav-top{
    width: 100%;
    height: 60px;
    background-color: #dd8936;
    display: flex;
    justify-content: space-between;
}
.burger-nav{
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;
}
.burger-nav span{
    width: 40px;
    height: 4px;
    background-color: #fff;
    position: relative;
}
.burger-nav span::after{
    content: '';
    width: 40px;
    height: 4px;
    position: absolute;
    top: -9px;
    background-color: #fff;
}
.burger-nav span::before{
    content: '';
    width: 40px;
    height: 4px;
    position: absolute;
    top: 9px;
    background-color: #fff;
}
.logoGabut{
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
}
.logoGabut h2{
    font-family: 'Righteous', cursive;
    color: #fff;
    font-size: 30px;
}

.main-landing{
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    /* background-color: seagreen; */
}
.post-section{
    width: 30%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: turquoise; */
    justify-content: center;
}
.box-post{
    width: 95%;
    height: 350px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px 7px rgba(0, 0, 0, .1);
}
.headBox{
    width: 100%;
    flex: 1;
    background-color: #fca652;
    display: flex;
    align-items: center;
}
.headBox h3{
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    margin-left: 15px;
}
.box-post textarea{
    width: 100%;
    flex: 4;
    border: none;
    padding: 10px;
    background-color: rgb(243, 243, 243);
}
.btn-post{
    width: 100%;
    flex: 1.4;
    /* background-color: rosybrown; */
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.btn-post button{
    width: 120px;
    height: 60%;
    background-color: #fca652;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    border: none;
    outline: none;
    margin-right: 10px;
}

.public-post{
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* border-left: 1px solid #000; */
    padding-top: 25px;

    /* overflow: hideen; */
    /* background-color: sansdybrown; */

    overflow-y: scroll;
}
.post-container{
    width: 60%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0 5px 25px 4px rgba(0, 0, 0, .1);
    margin-bottom: 15px;
}
.profile-poster{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #fca652;
    padding-left: 10px;
    justify-content: space-between;
}
.lefts{
    display: flex;
    flex: 1
}
.lefts img{
    width: 45px;
    height: 45px;
    border-radius: 40%;
    margin-right: 15px;
}
.lefts h3{
    font-size: 20px;
    font-weight: bold;
    color: rgb(56, 56, 56);
    font-family: 'Poppins', sans-serif;
}
.rights{
    display: flex;
    flex: 1;
    justify-content: flex-end;
    padding-right: 10px;
}
.rights span{
    font-family: arial;
    font-size: 20px;
    margin-left: 10px;
    color: #000;
    font-weight: bold;
    cursor: pointer;
}
.body-post{
    width: 100%;
    background-color: rgb(255, 255, 255);
    padding: 10px;
}
.body-post p{
    color: rgb(56, 56, 56);
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
}
.btn-poster{
    width: 100%;
    height: 80px;
    display: flex;
    /* background-color: rgb(223, 182, 147); */
    align-items: center;
    justify-content: flex-end;
}
.btn-comment{
    width: 24%;
    height: 50%;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid #555;
    margin: 10px;
}
.btn-comment i{
    font-size: 19px;
}

.commentar-section{
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 25px 4px rgba(0, 0, 0, .1);
    align-items: center;
}
.commentars{
    width: 95%;
    display: flex;
    /* margin: 15px; */
    flex-direction: column;
}
.user-comment{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    background-color: rgb(231, 231, 231);
    /* padding: 10px; */
    padding-left: 10px;
}
.user-comment h3{
    color: rgb(56, 56, 56);
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: bold;
    margin: 5px;
}
.user-comment span{
    color: rgb(146, 146, 146);
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    font-weight: normal;
    /* margin: 5px; */
}
.body-comment{
    width: 100%;
    padding: 10px;
    display: flex;
    background-color: #fff;
}
.body-comment span{
    color: rgb(44, 44, 44);
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: normal;
}
</style>
