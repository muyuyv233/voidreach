// 初始化 Supabase
const supabaseUrl = '你的 Supabase URL（如 https://xxxx.supabase.co）';
const supabaseKey = '你的 anon key';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// 发帖逻辑（post.html）
if (window.location.pathname.includes("post.html")) {
    document.getElementById("postForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        // 插入数据到 Supabase
        const { data, error } = await supabase
            .from('posts')
            .insert([{ title, content }]);

        if (error) {
            alert("发帖失败: " + error.message);
        } else {
            alert("发帖成功！");
            window.location.href = "index.html";
        }
    });
}

// 读取帖子（index.html）
else {
    async function loadPosts() {
        const { data: posts, error } = await supabase
            .from('posts')
            .select('*')
            .order('created_at', { ascending: false }); // 按时间倒序

        if (error) {
            console.error("加载失败: ", error);
        } else {
            const postsContainer = document.getElementById("posts");
            postsContainer.innerHTML = posts.map(post => `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5>${post.title}</h5>
                        <p>${post.content}</p>
                        <small class="text-muted">${new Date(post.created_at).toLocaleString()}</small>
                    </div>
                </div>
            `).join("");
        }
    }

    loadPosts();
}
