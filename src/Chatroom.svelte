<script>
    import {db} from "./firebase";
    import {collectionData} from "rxfire/firestore";
    import {starWith} from "rxjs/operators";

    export let user;
    export let logout;

    let message = "";

    const query = db.collection("chats").orderBy("sentAt");
    const chats = collectionData(query, "id").pipe(starWith([]));

    function sendMessage(){
        db.collection("chats").add({
            uid:user.uid,
            message:message,
            avatar:user.photoURL,
            sentAt:+new Date()
        });
        message = "";
    }
</script>

<style>


</style>

<main>
    <div class="header">
        <div class="logo">Chatroom</div>
        <button on:click={logout}>Logout</button>
    </div>
    <div class="message"></div>
    <div class="form">
        <input type="text" bind:value={message}>
        <button on:click={sendMessage}>
            <i class="fa fa-paper-plane"></i>
        </button>
    </div>
</main>