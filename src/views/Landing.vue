<template>
    <div class="container-landing">
        <aside>
            <div class="burger-section">
                <span></span>
            </div>
            <div class="profile-aside">
                <img src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg" alt="profile">
                <h2>Doctor Strange</h2>
            </div>
            <div class="menu-aside">
                <div class="alink">
                    <div class="icon-aside">
                        <i class="fas fa-user-alt"></i>
                    </div>
                    <a href="#">Profile</a>
                </div>
                <div class="alink">
                    <div class="icon-aside">
                        <i class="fas fa-blog"></i>
                    </div>
                    <a href="#">Posting</a>
                </div>
                <div class="alink">
                    <div class="icon-aside">
                        <i class="fas fa-images"></i>
                    </div>
                    <a href="#">Album</a>
                </div>
                <div class="alink">
                    <div class="icon-aside">
                        <i class="fas fa-sign-out-alt"></i>
                    </div>
                    <a href="#">Logout</a>
                </div>
            </div>
        </aside>
        <main>
            <div class="nav-top">
                <div class="burger-nav">
                    <span></span>
                </div>
                <div class="logoGabut">
                    <h2>Gabut Social</h2>
                </div>
            </div>
            <div class="main-landing">
                <div class="post-section">
                    <div class="box-post">
                        <div class="headBox">
                            <h3>Posting Kegabutan</h3>
                        </div>
                        <textarea placeholder="Posting"></textarea>
                        <div class="btn-post">
                            <button>Post</button>
                        </div>
                    </div>
                </div>
                <div class="public-post">
                    <div class="post-container">
                        <div class="profile-poster">
                            <img src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg" alt="avtr">
                            <h3>Doctor Strange</h3>
                        </div>
                        <div class="body-post">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tenetur sequi minima necessitatibus officia quaerat atque a rem. Accusamus, eius?</p>
                        </div>
                        <div class="btn-poster">
                            <div class="btn-comment">
                                <i class="far fa-comment-dots"></i>
                                <span>Commentar (10)</span>
                            </div>
                        </div>
                    </div>

                     <div class="post-container">
                        <div class="profile-poster">
                            <img src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg" alt="avtr">
                            <h3>Doctor Strange</h3>
                        </div>
                        <div class="body-post">
                            <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro consectetur ex eaque magni reprehenderit eos aspernatur vel maxime asperiores tenetur, hic reiciendis suscipit fuga veniam ad quae atque corporis, voluptate obcaecati nulla molestiae necessitatibus. Et laborum ipsam voluptatum, quod sequi corporis voluptatibus alias quas distinctio blanditiis, quam aspernatur amet officia? adipisicing elit. Id tenetur sequi minima necessitatibus officia quaerat atque a rem. Accusamus, eius?</p>
                        </div>
                        <div class="btn-poster">
                            <div class="btn-comment">
                                <i class="far fa-comment-dots"></i>
                                <span>Commentar (10)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container-landing{
    display: flex;
    width: 100vw;
    justify-content: space-between;
}
aside{
    z-index: 200;
    width: 15%;
    height: 100vh;
    display: flex;
    border-right: 1px solid #a86421;
    background-color:#ffd2a4;
    position: fixed;
    flex-direction: column;
    left: -17%;
}
.burger-section{
    width: 100%;
    height: 60px;
    background-color:  #dd8936;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.burger-section span{
    width: 50px;
    height: 4px;
    background-color: transparent;
    position: relative;
    /* right: 5px; */
}
.burger-section span::after{
    content: '';
    width: 25px;
    height: 4px;
    background-color: #fff;
    position: absolute;
    top: 0px;
    transform: rotate(45deg);
}
.burger-section span::before{
    content: '';
    width: 25px;
    height: 4px;
    background-color: #fff;
    position: absolute;
    top: 0px;
    transform: rotate(-45deg);
}
.profile-aside{
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: #fff; */
    align-items: center;
}
.profile-aside img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
.profile-aside h2{
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    font-weight: 500;
    margin-top: 10px;
    color: rgb(46, 46, 46);
}
.menu-aside{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}
.alink{
    width: 80%;
    display: flex;
    align-items: center;
    margin-bottom: 18px;
}
.icon-aside{
    width: 20%;
    display: flex;
    /* background-color: #fff; */
}
.alink a{
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    color: #555555;
    text-decoration: none;
}
.alink i{
    font-size: 17px;
    color: rgb(110, 110, 110);
}
main{
    display: flex;
    width: 100%;
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
    display: flex;
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
    display: flex;
    flex-direction: column;
    /* border-left: 1px solid #000; */
    padding-top: 25px;
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
}
.profile-poster img{
    width: 45px;
    height: 45px;
    border-radius: 40%;
    margin-right: 15px;
}
.profile-poster h3{
    font-size: 20px;
    font-weight: bold;
    color: rgb(56, 56, 56);
    font-family: 'Poppins', sans-serif;
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
    height: 50px;
    display: flex;
    /* background-color: rgb(223, 182, 147); */
    align-items: center;
    justify-content: flex-end;
}
.btn-comment{
    width: 24%;
    height: 80%;
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

</style>
