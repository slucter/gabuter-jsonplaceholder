<template>
   <aside>
        <div class="burger-section" @click="$emit('closeAside')">
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
</template>

<script>
export default {
  name: 'Aside'
}
</script>

<style scoped>
.showAside{
    left: 0!important;
    transition: 1s;
}
aside{
    transition: 1s;
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
    cursor: pointer;
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
</style>
