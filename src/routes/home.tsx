import local from './home.module.css';

function Home() {

    return <>
        <div class="content">
            <p class={local.info}>stash can help you organize and protect sensitive data.</p>
            <p class={local.info}>click one of the buttons below to access your library...</p>

            <div class={local.sections}>
                <form action="/text">
                    <button class={local.section}>
                        <a>Text</a>
                    </button>
                </form>
                <form action="/files">
                    <button class={local.section}>
                        <a>Files</a>
                    </button>
                </form>
                <form action="/passwords">
                    <button class={local.section}>
                        <a>Passwords</a>
                    </button>
                </form>
                <form action="/images">
                    <button class={local.section}>
                        <a>Images</a>
                    </button>
                </form>
                <form action="/videos">
                    <button class={local.section}>
                        <a>Videos</a>
                    </button>
                </form>
                <form action="/music">
                    <button class={local.section}>
                        <a>Music</a>
                    </button>
                </form>
            </div>

            <p class={local.info}>...or <a class={local.new_entry} href="/new-entry">create a new entry</a>!</p>

            <div class={local.search}>
                <input type='text' placeholder='search entire database'/>
                <a>Search</a>
            </div>
        </div>
    </>

}

export default Home;