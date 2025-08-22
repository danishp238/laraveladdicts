<template>
    <h1>🚀 Building a SaaS Backend with Laravel: Crafting Robust Models &amp; Relationships</h1>
    <p class="ds-markdown-paragraph">Welcome, Laravel enthusiasts! Today we're kicking off an exciting journey to build
        a full-stack SaaS application using Vue.js, Tailwind CSS, and Laravel. We're starting with the backend first
        because, as any experienced developer knows, a solid foundation is key to building scalable applications.</p>
    <h2>🔍 What We're Building</h2>
    <p class="ds-markdown-paragraph">Our SaaS app will handle digital product transactions with:</p>
    <ul>
        <li>
            <p class="ds-markdown-paragraph">User management with credits system</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph">Product/item catalog</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph">Transaction processing</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph">Clean, maintainable architecture following industry best practices</p>
        </li>
    </ul>
    <h2>🏗️ The Foundation: Models &amp; Migrations</h2>
    <p class="ds-markdown-paragraph">Let's dive into the three core models that form the backbone of our application:
    </p>
    <h3>1. The User Model - Your Application's VIPs</h3>
    <div class="md-code-block md-code-block-light">
        <div class="md-code-block-banner-wrap">
            <div class="md-code-block-banner md-code-block-banner-lite">
                <div class="_121d384">
                    <div class="d2a24f03"><span class="d813de27">php</span></div>
                    <div class="d2a24f03">&nbsp;</div>
                </div>
            </div>
        </div>
        <pre><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\</span>Models</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Eloquent<span class="token punctuation">\</span>Factories<span class="token punctuation">\</span>HasFactory</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Foundation<span class="token punctuation">\</span>Auth<span class="token punctuation">\</span>User</span> <span class="token keyword">as</span> Authenticatable<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Notifications<span class="token punctuation">\</span>Notifiable</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Laravel<span class="token punctuation">\</span>Sanctum<span class="token punctuation">\</span>HasApiTokens</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Team</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Transaction</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Authenticatable</span>
<span class="token punctuation">{</span>
    <span class="token keyword">use</span> <span class="token package">HasFactory</span><span class="token punctuation">,</span> HasApiTokens<span class="token punctuation">,</span> Notifiable<span class="token punctuation">;</span>

    <span class="token keyword">protected</span> <span class="token variable">$guarded</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">transactions</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasMany</span><span class="token punctuation">(</span><span class="token class-name static-context">Transaction</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></pre>
    </div>
    <p class="ds-markdown-paragraph"><strong>Key Features:</strong></p>
    <ul>
        <li>
            <p class="ds-markdown-paragraph"><code>HasApiTokens</code>: Prepares our user model for API authentication
                (we'll use Sanctum later)</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph"><code>Notifiable</code>: Ready-to-go notification system</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph"><code>$guarded = false</code>: Mass assignment protection (we'll handle
                validation at the controller level)</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph"><code>transactions()</code>: Defines a one-to-many relationship with
                transactions</p>
        </li>
    </ul>
    <p class="ds-markdown-paragraph"><strong>Migration Highlights:</strong></p>
    <div class="md-code-block md-code-block-light">
        <div class="md-code-block-banner-wrap">
            <div class="md-code-block-banner md-code-block-banner-lite">
                <div class="_121d384">
                    <div class="d2a24f03"><span class="d813de27">php</span></div>
                    <div class="d2a24f03">&nbsp;</div>
                </div>
            </div>
        </div>
        <pre><span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'users'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'email'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">unique</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">unsignedInteger</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'available_credits'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">timestamp</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'email_verified_at'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'email_verification_token'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">nullable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'password'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">rememberToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>
    </div>
    <ul>
        <li>
            <p class="ds-markdown-paragraph"><code>available_credits</code>: Our virtual currency system for purchases
            </p>
        </li>
        <li>
            <p class="ds-markdown-paragraph"><code>email_verification_token</code>: Prepared for secure email
                verification flows</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph">All the standard Laravel auth fields included</p>
        </li>
    </ul>
    <h3>2. The Transaction Model - The Heart of Commerce</h3>
    <div class="md-code-block md-code-block-light">
        <div class="md-code-block-banner-wrap">
            <div class="md-code-block-banner md-code-block-banner-lite">
                <div class="_121d384">
                    <div class="d2a24f03"><span class="d813de27">php</span></div>
                    <div class="d2a24f03">&nbsp;</div>
                </div>
            </div>
        </div>
        <pre><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\</span>Models</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Eloquent<span class="token punctuation">\</span>Model</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Transaction</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$guarded</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">items</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasMany</span><span class="token punctuation">(</span><span class="token class-name static-context">Item</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></pre>
    </div>
    <p class="ds-markdown-paragraph"><strong>Why This Matters:</strong></p>
    <ul>
        <li>
            <p class="ds-markdown-paragraph"><code>user()</code>: Each transaction belongs to a single user</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph"><code>items()</code>: A transaction can have multiple items (one-to-many)
            </p>
        </li>
        <li>
            <p class="ds-markdown-paragraph">Clean, focused model ready for business logic</p>
        </li>
    </ul>
    <p class="ds-markdown-paragraph"><strong>Migration Breakdown:</strong></p>
    <div class="md-code-block md-code-block-light">
        <div class="md-code-block-banner-wrap">
            <div class="md-code-block-banner md-code-block-banner-lite">
                <div class="_121d384">
                    <div class="d2a24f03"><span class="d813de27">php</span></div>
                    <div class="d2a24f03">&nbsp;</div>
                </div>
            </div>
        </div>
        <pre><span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'transactions'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">foreignId</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'user_id'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">constrained</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">onDelete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'cascade'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">foreignId</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'items_id'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">constrained</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">onDelete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'cascade'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>
    </div>
    <ul>
        <li>
            <p class="ds-markdown-paragraph"><code>constrained()</code>: Automatic foreign key constraints</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph"><code>onDelete('cascade')</code>: Automatic cleanup of related records</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph">Note: We'll likely want to add more fields like status, total amount, etc.
            </p>
        </li>
    </ul>
    <h3>3. The Item Model - Your Digital Products</h3>
    <div class="md-code-block md-code-block-light">
        <div class="md-code-block-banner-wrap">
            <div class="md-code-block-banner md-code-block-banner-lite">
                <div class="_121d384">
                    <div class="d2a24f03"><span class="d813de27">php</span></div>
                    <div class="d2a24f03">&nbsp;</div>
                </div>
            </div>
        </div>
        <pre><span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\</span>Models</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\</span>Database<span class="token punctuation">\</span>Eloquent<span class="token punctuation">\</span>Model</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\</span>Models<span class="token punctuation">\</span>Transaction</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Items</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token variable">$guarded</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token class-name static-context">Transaction</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></pre>
    </div>
    <p class="ds-markdown-paragraph"><strong>Migration Structure:</strong></p>
    <div class="md-code-block md-code-block-light">
        <div class="md-code-block-banner-wrap">
            <div class="md-code-block-banner md-code-block-banner-lite">
                <div class="_121d384">
                    <div class="d2a24f03"><span class="d813de27">php</span></div>
                    <div class="d2a24f03">&nbsp;</div>
                </div>
            </div>
        </div>
        <pre><span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'items'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'description'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'cost'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>
    </div>
    <p class="ds-markdown-paragraph"><strong>Sample Seed Data:</strong></p>
    <div class="md-code-block md-code-block-light">
        <div class="md-code-block-banner-wrap">
            <div class="md-code-block-banner md-code-block-banner-lite">
                <div class="_121d384">
                    <div class="d2a24f03"><span class="d813de27">php</span></div>
                    <div class="d2a24f03">&nbsp;</div>
                </div>
            </div>
        </div>
        <pre><span class="token class-name static-context">Items</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string double-quoted-string">"name"</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">"Premium Video Editor"</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"description"</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">"Professional tools for your business needs."</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"cost"</span> <span class="token operator">=&gt;</span> <span class="token number">25</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Items</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string double-quoted-string">"name"</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">"Custom mobile application development kit"</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"description"</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">"lorem ipsum sit dolor emet"</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"cost"</span> <span class="token operator">=&gt;</span> <span class="token number">80</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Items</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token string double-quoted-string">"name"</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">"Premium Web Hosting"</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"description"</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">"Reliable hosting with 99.9% uptime."</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"cost"</span> <span class="token operator">=&gt;</span> <span class="token number">50</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>
    </div>
    <h2>💡 Why This Architecture Works</h2>
    <ol start="1">
        <li>
            <p class="ds-markdown-paragraph"><strong>Clear Separation of Concerns</strong>: Each model handles a
                specific domain</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph"><strong>Predictable Relationships</strong>: Easy to understand how data
                connects</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph"><strong>Scalability</strong>: Ready to add more features like:</p>
            <ul>
                <li>
                    <p class="ds-markdown-paragraph">Refunds</p>
                </li>
                <li>
                    <p class="ds-markdown-paragraph">Discounts</p>
                </li>
                <li>
                    <p class="ds-markdown-paragraph">Subscription models</p>
                </li>
            </ul>
        </li>
        <li>
            <p class="ds-markdown-paragraph"><strong>API-Ready</strong>: Models are prepared for JSON responses</p>
        </li>
    </ol>
    <h2>🛠️ Pro Tips for Your Implementation</h2>
    <ol start="1">
        <li>
            <p class="ds-markdown-paragraph"><strong>Naming Consistency</strong>: Consider
                renaming&nbsp;<code>Items</code>&nbsp;to&nbsp;<code>Item</code>&nbsp;to follow Laravel conventions</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph"><strong>Future-Proofing</strong>: Add status fields early
                (e.g.,&nbsp;<code>transaction_status</code>)</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph"><strong>Indexing</strong>: Add indexes to frequently queried fields</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph"><strong>Validation</strong>: Prepare for robust validation in controllers
            </p>
        </li>
    </ol>
    <h2>🚀 What's Coming Next?</h2>
    <p class="ds-markdown-paragraph">In our next installment, we'll:</p>
    <ul>
        <li>
            <p class="ds-markdown-paragraph">Set up API routes with proper versioning</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph">Implement authentication with Laravel Sanctum</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph">Create our first controller with industry-standard practices</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph">Discuss proper request validation techniques</p>
        </li>
    </ul>
    <p class="ds-markdown-paragraph">Get ready to transform these models into a fully functional API backend!</p>
    <h2>💬 Your Challenge (Optional)</h2>
    <p class="ds-markdown-paragraph">Before the next part, try:</p>
    <ol start="1">
        <li>
            <p class="ds-markdown-paragraph">Adding a&nbsp;<code>status</code>&nbsp;field to transactions</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph">Creating a seed for test users</p>
        </li>
        <li>
            <p class="ds-markdown-paragraph">Thinking about what API endpoints we'll need</p>
        </li>
    </ol>
    <p class="ds-markdown-paragraph">Drop your solutions or questions in the comments!</p>
    <p class="ds-markdown-paragraph">Remember, every expert was once a beginner. You're building real-world skills with
        every line of code. Keep going! 💪</p>
    <p class="ds-markdown-paragraph">
        <a data-router-link="saas-app-building-auth-system">
         [Next up: Building Robust API Routes &rarr;]

        </a>
    </p>
    <!-- Comments are visible in the HTML source only -->
</template>

<style scoped>
    .hero-gradient {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .code-block {
        background: #2d2d2d;
        border-left: 4px solid #667eea;
    }

    .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    .animate-float {
        animation: float 6s ease-in-out infinite;
    }

    @keyframes float {
        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(-20px);
        }

        100% {
            transform: translateY(0px);
        }
    }

    h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  margin: 1.5rem 0 1rem;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

h1 {
  font-size: 2.5rem;
  background-image: linear-gradient(to right, #8d7cb4, #38b2ac);
}

h2 {
  font-size: 2rem;
  background-image: linear-gradient(to right, #9582c2, #4fd1c5);
}

h3 {
  font-size: 1.75rem;
  background-image: linear-gradient(to right, #2f008b, #68d391);
}

/* List styles */
ul, ol {
  padding-left: 2rem;
  margin: 1rem 0;
}

li {
  margin-bottom: 0.5rem;
}

ul {
  list-style-type: disc;
}

ol {
  list-style-type: decimal;
}

/* Link styles */
a {
  color: #6b46c1;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
}

a:hover {
  color: #38b2ac;
}

/* Button styles */
.button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(to right, #6b46c1, #38b2ac);
  color: white;
  border-radius: 0.375rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
}

.button:hover {
  background: linear-gradient(to right, #805ad5, #4fd1c5);
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Container styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Card styles */
.card {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 2rem;
}

/* Responsive design */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }
}
</style>