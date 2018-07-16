webpackJsonp([56443374993712],{619:function(t,e){t.exports={data:{markdownRemark:{html:'<h2 id="overview"><a href="#overview" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overview</h2>\n<p>About modal layout.</p>\n<h2 id="accessibility"><a href="#accessibility" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Accessibility</h2>\n<table>\n<thead>\n<tr>\n<th>Attribute</th>\n<th>Applies to</th>\n<th>Outcome</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>role="dialog"</code></td>\n<td><code>.pf-c-about-modal-box</code></td>\n<td>Identifies the element that serves as the modal container. \n<strong>Required</strong></td>\n</tr>\n<tr>\n<td><code>aria-labelledby="[id value of element describing modal]"</code></td>\n<td><code>.pf-c-about-modal-box</code></td>\n<td>Gives the modal an accessible name by referring to the element that provides the dialog title. \n<strong>Required when adequate titling element is present</strong></td>\n</tr>\n<tr>\n<td><code>aria-label="[title of modal]"</code></td>\n<td><code>.pf-c-about-modal-box</code></td>\n<td>Gives the modal an accessible name. \n<strong>Required when adequate titling element is <em>not</em> present</strong></td>\n</tr>\n<tr>\n<td><code>aria-describedby="[id value of applicable content]"</code></td>\n<td><code>.pf-c-about-modal-box</code></td>\n<td>Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal.</td>\n</tr>\n<tr>\n<td><code>aria-modal="true"</code></td>\n<td><code>.pf-c-modal-box</code></td>\n<td>Tells assistive technologies that the windows underneath the current modal are not available for interaction. \n<strong>Required</strong></td>\n</tr>\n<tr>\n<td><code>aria-label="Close Dialog"</code></td>\n<td><code>.pf-c-modal-box__close .pf-c-button</code></td>\n<td>Provides an accessible name for the close button as it uses an icon instead of text. \n<strong>Required</strong></td>\n</tr>\n</tbody>\n</table>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<table>\n<thead>\n<tr>\n<th>Class</th>\n<th>Applied To</th>\n<th>Outcome</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>.pf-c-about-modal-box</code></td>\n<td><code>&#x3C;div></code>\n, \n<code>&#x3C;article></code></td>\n<td>Initiates a modal box.</td>\n</tr>\n<tr>\n<td><code>.pf-c-about-modal-box__brand</code></td>\n<td><code>&#x3C;div></code></td>\n<td>Initiates a modal box brand cell.</td>\n</tr>\n<tr>\n<td><code>.pf-c-about-modal-box__brand-image</code></td>\n<td><code>&#x3C;img></code></td>\n<td>Initiates a modal box brand image.</td>\n</tr>\n<tr>\n<td><code>.pf-c-about-modal-box__close</code></td>\n<td><code>&#x3C;div></code></td>\n<td>Initiates a modal box close cell.</td>\n</tr>\n<tr>\n<td><code>.pf-c-about-modal-box__header</code></td>\n<td><code>&#x3C;div></code>\n, \n<code>&#x3C;header></code></td>\n<td>Initiates a modal box header cell.</td>\n</tr>\n<tr>\n<td><code>.pf-c-about-modal-box__hero</code></td>\n<td><code>&#x3C;div></code></td>\n<td>Initiates a modal box hero cell.</td>\n</tr>\n<tr>\n<td><code>.pf-c-about-modal-box__hero-image</code></td>\n<td><code>&#x3C;img></code></td>\n<td>Initiates a modal box hero image.</td>\n</tr>\n<tr>\n<td><code>.pf-c-about-modal-box__logo</code></td>\n<td><code>&#x3C;div></code></td>\n<td>Initiates a modal box logo cell.</td>\n</tr>\n<tr>\n<td><code>.pf-c-about-modal-box__logo-image</code></td>\n<td><code>&#x3C;img></code></td>\n<td>Initiates a modal box logo image.</td>\n</tr>\n<tr>\n<td><code>.pf-c-about-modal-box__content</code></td>\n<td><code>&#x3C;div></code></td>\n<td>Initiates a modal box content cell.</td>\n</tr>\n</tbody>\n</table>',fields:{path:"/components/docs/docs",type:"documentation",contentType:"component"}}},pathContext:{pagePath:"/components/docs/docs",type:"documentation",contentType:"component"}}}});
//# sourceMappingURL=path---components-docs-docs-60b847fbcf61efde3348.js.map