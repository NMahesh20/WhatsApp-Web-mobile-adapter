function insertMetaTag() {
    const metaViewport = document.createElement("meta");
    metaViewport.name = "viewport";
    metaViewport.content =
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
    document.getElementsByTagName("head")[0].appendChild(metaViewport);
    // console.log("insert meta tag!");
}
function insertStyleTag() {
    const styleText =
        "html{background:transparent;overflow-y:hidden;height:calc(100% - env(safe-area-inset-bottom))}body{height:100%;background:transparent}html[dir] .landing-wrapper:before{background:transparent}#app,.app-wrapper-web{background:transparent!important}._30oB1{width:92vw}.nMnIl{overflow-y:hidden}.landing-window{height:100vh}.landing-wrapper{min-width:auto;width:100%;height:100vh;padding-left:0!important;padding-right:0!important;background:transparent!important}.landing-wrapper-before{display:none!important}html[dir] .landing-window{background:transparent!important}html[dir] .landing-header{display:none}html[dir] .landing-main{width:100%;height:100%;padding:8.4vw 6.4vw;padding-bottom:0;box-sizing:border-box;background:#f2f2f6!important;overflow-y:auto!important}html[dir] .landing-main .landing-custom-banner+div:not(._1N3oL){display:none}#app>div>div.landing-wrapper>div.landing-window>div.landing-main>div>div>div._aj-7>div.x1q74xe4.x1iikomf.xggjnk3.x14q46b.xieb3on.x113ickt.x1iu5sdd.xval734.x1r328p9.xmf4tux{margin-bottom:0}html[dir] .landing-main .QtrYx{font-size:15px;color:#202020}.i0jNr{color:#202020}.QtrYx strong{font-weight:700!important}._ak5k{display:none}html[dir] .vGm4z ._2rQUO{padding-top:6vw!important}.l0q610ad.l0q610ad{height:25vw!important;width:100%!important}._3RVSj ._2I5ox{min-width:0!important;width:100%;padding-left:0!important}.rvmgzurb{width:8.5vw!important}.rvmgzurb span.ctdnaqea{font-size:1.175rem}.f0SXz._3I-he{display:none}.landing-main div[data-testid=qrcode],.landing-main div[data-testid=qrcode] canvas{max-width:none!important}.landing-main div[data-testid=qrcode]{padding:12px;box-sizing:border-box;width:257px;height:257px;background-color:#fff;border-radius:10px}.landing-main div[data-testid=qrcode] canvas{width:100%;height:100%;box-sizing:border-box;border:1px solid #dedede}._2UwZ_ .b77wc{left:50%!important;top:50%!important;margin:0!important;transform:translate(-50%,-50%)}._2UwZ_ .b77wc,._2UwZ_ .b77wc svg{width:50px;height:50px}._2znac{transform:scaleY(1) scaleX(1)!important}#app>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2{min-width:auto;min-height:auto;padding:0;position:relative;width:100%;overflow-x:hidden;background-color:#fff}#app>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2>div:nth-child(1){display:none;height:0}#app>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2>div:nth-child(3){display:none;height:0}#app div.x1lliihq>div>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl.x1ism021.x1w450gt>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1cy8zhl>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.x1tfhste{display:none}#app>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xgpatz3.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4>div:nth-child(1)>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xe93d63.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1cy8zhl>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.x78zum5.x1qughib.xkh2ocl.x1cy8zhl.x1q0g3np.xnlzww4.xozqiw3.x198rtga.xxs79tx.xnqmh1m{row-gap:0}#app div.x1lliihq>div>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl.x1ism021.x1w450gt>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1cy8zhl>div:nth-child(2){display:none}html[device=ipad] #app>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4{overflow-y:auto}#app div.x1lliihq>div>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl.x1ism021.x1w450gt>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1cy8zhl{order:2}#app div.x1lliihq>div{width:100%;border:none;padding-inline:0;padding-bottom:20px;border-radius:0;padding-top:0;background-color:#fff}#app>div div.x1lliihq{height:100%}:not([data-login-type=phoneNumber]) #app>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4{position:absolute;height:100%}#app>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4>div:nth-child(2)>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xe93d63.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1cy8zhl>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.xamitd3.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1cy8zhl>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.x1tfhste{display:none}html[data-login-type=phoneNumber]:not([device=ipad]) #app>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4{position:relative}#app>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8{position:absolute;display:none;bottom:10px}html[data-login-type=qrCode]:not([device=ipad]) #app>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8{bottom:0}html[data-login-type=phoneNumber]:not([device=ipad]) #app>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8{position:absolute}html[data-login-type=activeCode] #app div.x1lliihq>div>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.x1tfhste{display:none}html[data-login-type=activeCode]:not([device=ipad]) #app>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8{position:unset}html[data-login-type=qrCode]:not([device=ipad]) #app div.x1lliihq div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl.x1ism021.x1w450gt>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1cy8zhl>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.x1sy10c2{position:absolute;bottom:25px;left:50%;transform:translate(-50%);z-index:1}html[data-login-type=activeCode]:not([device=ipad]) #app div.x1lliihq div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.x1sy10c2{align-self:center}#app div.x1lliihq>div>div{padding-inline:40px;padding-top:5rem}#app div.x1lliihq>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xh8yej3{padding-top:0;padding-inline:0}div.x1lliihq.xh8yej3+div.x1lliihq.xh8yej3{display:none}#app>div._aiwn.app-wrapper-web.safari-fix.os-mac>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.xv2v0i9.x65nank>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xi32cqo.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.xkh2ocl.x12fk4p8.xv54qhq.xwib8y2.xf7dkkf.xp1r0qw.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x17zd0t2.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4.x1yhtvy6.xnnl45u.x1492xgw.x1bmbh2a.xzr1yc1.x2b8uid>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8{font-size:.9em}#app>div._aiwn.app-wrapper-web.safari-fix.os-mac>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.xv2v0i9.x65nank>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xi32cqo.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x12fk4p8.xkh2ocl.xh8yej3.x78zum5.xl56j7k{display:none}#app>div._aiwn.app-wrapper-web.safari-fix.os-mac>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.xv2v0i9.x65nank>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xi32cqo.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8{display:none}@media (min-width: 576px) and (max-width: 1024px){html[dir] .landing-main .landing-title{margin-bottom:2.4vw}html[dir] .QtrYx+.QtrYx{margin-bottom:2.4vw}}._amik,div[data-testid=chat-butterbar],span[data-testid=chat-butterbar]{display:none!important}html[dir] ._3j691{pointer-events:none}._1AHcd,._8nE1Y{pointer-events:all}#wa-popovers-bucket>div>div.x1n2onr6>div[role=tooltip]{display:none}._amjz{padding-left:3rem}._amkd{max-width:18rem!important}#main>div._amm9>div>div._ajyl>div.x3psx0u.xwib8y2.xkhd6sd.xrmvbpv>div>div>div._amj-.message-out{align-items:flex-start}#main>div._amm9>div>div._ajyl>div.x3psx0u.xwib8y2.xkhd6sd.xrmvbpv>div>div>div._amj-.message-out>div._amk4._amkd>div._amk6._amlo>div>div.x1yuel0x{width:18rem}._amk6 ._ak4a{width:75vw}@media (min-width: 768px){._amk6 ._ak4a{width:33vw}}._amk4._amkt{max-width:17rem!important}.gndfcl4n.l8fojup5.paxyh2gw.sfeitywo.cqsf3vkf.p357zi0d.ac2vgrno.laorhtua.gfz4du6o.r7fjleex.g0rxnol2[data-testid=image-thumb]{width:74.6vw!important;height:74.6vw!important}html[dir] ._2sDI2._1nG7g{left:10px!important}html[dir] ._2sDI2._18P-H{left:10px!important;max-width:95vw!important}._2sDI2._1qj0V{width:100%!important;right:0!important}._3YS_f._2A1R8{overflow-x:scroll}#main>div._amm9>div>div._ajyl>div.x3psx0u.xwib8y2.xkhd6sd.xrmvbpv div._amlh{display:block}#app>div._aiwn>div>span:nth-child(2)>div>div{display:none}@media screen and (max-width: 767px){header.x11aied4{height:3.75rem}div._ak72>._ak8n:empty+._ak8l{padding:0 1rem}._akk3 ._ak96{padding:0;min-width:auto!important;width:100%}.x10h3iyq{width:2rem}.x5kalc8{height:2rem}header.x9f619.x78zum5.x1okw0bk.x6s0dn4.x7j6532.xc73u3c.x9mfa4r.xzwifym.x150wa6m{padding-left:8px}div.x104kibb.x1iyjqo2.x4osyxg.x6ikm8r.x10wlt62.x1mzt3pk.xo442l1.x1ua5tub.x1y332i5.x117nqv4.x1aueamr.x1wm35g.xj8l9r2>h1:only-child{margin-left:44px}header.x12xzxwr.x1n2onr6.x9f619.x78zum5.x6s0dn4.xq3y45c.xbyj736.x5yr21d.x1acz5yr.x1g0dm76.xpdmqnj.x889kno.x1a8lsjc{position:absolute;left:0;top:0;transform:translate(-100%);transition:transform .3s}html.nav-open header.x12xzxwr.x1n2onr6.x9f619.x78zum5.x6s0dn4.xq3y45c.xbyj736.x5yr21d.x1acz5yr.x1g0dm76.xpdmqnj.x889kno.x1a8lsjc{transform:translate(0);z-index:301}html[dir=rtl].nav-open header.x12xzxwr.x1n2onr6.x9f619.x78zum5.x6s0dn4.xq3y45c.xbyj736.x5yr21d.x1acz5yr.x1g0dm76.xpdmqnj.x889kno.x1a8lsjc{right:0}header.x12xzxwr.x1n2onr6.x9f619.x78zum5.x6s0dn4.xq3y45c.xbyj736.x5yr21d.x1h3rtpe.x1g0dm76.xpdmqnj.x889kno.x1a8lsjc{position:absolute;left:0;top:0;transform:translate(-100%);transition:transform .3s}html.nav-open header.x12xzxwr.x1n2onr6.x9f619.x78zum5.x6s0dn4.xq3y45c.xbyj736.x5yr21d.x1h3rtpe.x1g0dm76.xpdmqnj.x889kno.x1a8lsjc{transform:translate(0);z-index:301}html[dir=rtl].nav-open header.x12xzxwr.x1n2onr6.x9f619.x78zum5.x6s0dn4.xq3y45c.xbyj736.x5yr21d.x1h3rtpe.x1g0dm76.xpdmqnj.x889kno.x1a8lsjc{right:0}#app>div>span:nth-child(3)>div>div>div>div{min-width:auto}#app>div>span:nth-child(3)>div>div>div>div>div{width:90vw;transform:translate(-50vw)}html div.drawer-shadow{display:none}html.nav-open div.drawer-shadow{display:block;position:absolute;left:var(--navbar-width);top:0;width:100vw;height:100vh;background-color:#0000004d}html[dir=rtl].nav-open div.drawer-shadow{left:0;right:var(--navbar-width)}.x10l6tqk.x13vifvy.x17qophe.x1bpt9pm.xh8yej3.x5yr21d.x66m237{overflow-x:hidden}.xoyzfg9{top:32px}#app>div>span:nth-child(4)>div>div>div>span>div>div>div>div>div.x10l6tqk.xa1v5g2.x78zum5.x1q0g3np.x65f84u.x1yc453h.xt0e3qv.x2vplmn.xds687c.x17qophe.xkrivgy.x1gryazu{top:64px}#app>div>div>div.two._aigs>header>div>div>div>div>span>div>div>div:nth-of-type(3),#app>div>div>div.two._aigs>header>div>div>div>div>span>div>div>div:nth-child(4){display:none}#app div.x78zum5.xdt5ytf.x5yr21d div._aiwn.app-wrapper-web.safari-fix.os-mac div._aigs header>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1cy8zhl.xh8yej3.x5yr21d>div:nth-child(1)>div>div:nth-child(3),#app div.x78zum5.xdt5ytf.x5yr21d div._aiwn.app-wrapper-web.safari-fix.os-mac div._aigs>header>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1cy8zhl.xh8yej3.x5yr21d>div:nth-child(1)>div>div:nth-child(4){display:none}#app>div>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x2lwn1j.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v>div:nth-child(1){display:none}.expend-btn{width:36px;height:36px;display:flex;justify-content:center;align-items:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}._aigs.two.is-message-open ._aigv._aig-._aohg,._aigs.two.is-message-open ._aig-{display:none}._aigs{min-width:auto!important;display:block!important;height:100%!important;min-height:auto!important}._3RGKj{flex:1;min-width:100vw}#wa-popovers-bucket .xixxii4.x14g40p9.x1al4vs7{display:block}#wa-popovers-bucket .xixxii4.x14g40p9.x1al4vs7[data-animate-dropdown-item=true]{top:50%!important;transform:translateY(-50%)!important}.xixxii4.x14g40p9.x1al4vs7{display:none}.two ._aigw,.three ._aigw{position:fixed!important;inset:0 -100% 0 0!important;width:100%!important;transform:translateZ(0)!important;max-width:100%!important;flex:0 0 100%!important;margin-inline-start:0}html[dir=rtl] .two ._aigw,html[dir=rtl] .three ._aigw{right:0!important;left:-100%!important}._2QgSC header{height:auto}._aigs.two.is-message-open ._aigw,._aigs.three ._aigw{transform:translateZ(0) translate(-100%)!important;z-index:101;left:0}html[dir=rtl] ._aigs.two.is-message-open ._aigw,html[dir=rtl] ._aigs.three ._aigw{transform:translateZ(0) translate(100%)!important;z-index:101;right:0}._aigs.two.is-message-open header.xa1v5g2.x1n2onr6{display:none}#backBtn{font-size:20px!important;margin-right:10px!important;cursor:pointer!important;padding:10px!important}#backBtn .icon{width:20px!important;height:20px!important}#wa-popovers-bucket button.xexx8yu.x4uap5.x18d9i69.xkhd6sd.xjb2p0i.xk390pu.x1heor9g.x1ypdohk.xjbqb8w.x972fbf.xcfux6l.x1qhh985.xm0m39n{display:block}html[dir=ltr] header[data-testid=conversation-header]{border-left:0px!important;position:fixed!important;top:0;left:0;box-shadow:0 0 12px #0000001a}._5kRIK[data-testid=conversation-panel-messages]{height:calc(100% - 59px);top:59px}#main>div._amm9>div>div._ajyl>div.x3psx0u.xwib8y2.xkhd6sd.xrmvbpv>div:nth-child(3)>div>div>div>div._amk6>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x6s0dn4.x2b8uid.x1rjt51p.x16m5f1z{max-width:100%;width:100%}.three ._aig-{width:100%!important;z-index:200;top:0;position:absolute;max-width:100%!important}.x9f619.x78zum5.xdt5ytf.x6s0dn4.xl56j7k.xh8yej3.xpb48g7.x1jn0hjm.x1us19tq[role=dialog]{min-width:100vw}.x9f619.x78zum5.x1c4vz4f.x2lah0s.xdl72j9.xdt5ytf.xvue9z.x1xy6bms.xxbr6pl.xx6bls6.xbbxn1n.x1v8jjaa.xkwfhqy.x17e6fzg.x15dh256.x1t7u3xy.x1shw4ur.x6ikm8r.x10wlt62:not(div[data-testid=chat-list-search-container]){width:90%}.x1v8jjaa.xkwfhqy.x17e6fzg.x15dh256.x1t7u3xy.x1shw4ur.x6ikm8r.x10wlt62.x1n2onr6.xvue9z.x1egiwwb.xexx8yu.x4uap5.x18d9i69.xkhd6sd{width:95%}.x9f619.x78zum5.xdt5ytf.x6s0dn4.xl56j7k.xh8yej3.xpb48g7.x1jn0hjm.x1us19tq[role=dialog]>div{width:95%}._ak4w._ak4-,._ak4w._ak4_._ak58{width:95%!important;left:50%!important;margin-left:0!important;transform:translate(-50%) scale(1)!important}div[data-testid=confirm-popup],div[data-testid=mute-popup],div[data-testid=highlight-e2e-message-modal]{width:100%;min-width:auto}div[data-testid=highlight-e2e-message-modal] button[data-testid=popup-controls-ok]{display:none}._3ev9-{min-width:auto!important}._3J6wB{width:90%!important}._2HUCB{width:100%!important}._3Bc7H._3GWRQ{display:none!important}._2v5gS{left:0!important;width:100%!important;background-color:#0c1418;height:calc(100% - 26.7vw);top:26.7vw}.PfNbf{width:0!important}._3b17O{width:100%!important}.SU2X1{display:none!important}.ib1vZ{left:10.7vw!important;right:10.7vw!important}.XNDC5{display:none!important}html[dir=ltr] .bmJTq{left:10px!important;top:13.86vw!important}html[dir] ._3Hudz{background-color:#20262b!important}._ajwt{min-width:100vw!important;min-height:100%!important}._aigs.three.is-message-open div.x10l6tqk.x13vifvy.xds687c.x1ey2m1c.x17qophe{transform:translateY(0)!important}._aigs .xwvwv9b>span>div.x10l6tqk.x13vifvy.xds687c.x1ey2m1c.x17qophe{transform:translateY(0)!important}button.xexx8yu.x4uap5.x18d9i69.xkhd6sd{margin-left:0}._ah9o{padding:8px!important}html[dir] ._2nStn{margin:0!important}html:not([dir=rtl]) .c3x5l3r8{overflow:hidden}html[dir] ._2wtUo{display:none!important}html[dir] ._3ii0l{display:none}.dn3ua38v{margin-top:0!important;height:100%!important}.McTiQ{overflow-x:auto}html[dir] ._3IU7z,html[dir] ._1166F{width:97vw!important;left:50%!important;transform:scale(1) translate(-50%)!important;margin-left:0!important}html[dir=ltr] ._2Wd6U{margin-left:8px!important;margin-right:8px!important}html[dir=ltr] ._10mnt._3KMMv{right:0!important}._3IU7z ._2hkxa{left:13.3vw!important}._1166F ._2hkxa{left:26.3vw!important}html[dir] ._1WQBr{left:0}._3Id8-{height:auto!important}.ldL67._2i3T7._1cpSb{flex:1!important}.two ._2i3T7{flex:1!important;max-width:none!important}.KPJpj ._2QzJd:nth-child(6){display:none}.KPJpj ._2QzJd:nth-child(8){display:none}html[dir] ._2QzJd+._2QzJd ._36Lzk{margin-right:8vw!important;padding-right:0!important}header[data-testid=chatlist-header]{padding-right:16px!important}html[dir=ltr] ._8nE1Y{margin-right:15px;padding-right:0}.xs8rnei{width:95%}.xs8rnei ._ak72{padding-left:3.5rem}.eg3lofc5{margin-top:0!important}html:not([dir=rtl]) .s7u82e91.s7u82e91{width:90%}html[dir=ltr] ._2eIcs{margin-right:0!important;width:100%}._2eIcs ._3OtEr>div{padding:0}._2eIcs ._3OtEr:nth-of-type(6){display:none}html[dir] ._199zF._2qktw ._8nE1Y{display:none}._2XdMx{justify-content:space-between;padding-right:10px}}html[device=ipad] #main>footer>div._ak1k.xnpuxes.copyable-area>div>span:nth-child(1)>div>div{max-width:none}html[device=ipad] #app .landing-window{width:100%}html[device=ipad] #app>div>div.landing-wrapper{height:100%;padding-bottom:0}html[device=ipad] #app>div>div.landing-wrapper>div.landing-window{width:100%;height:100%}html[device=ipad] #app>div>div.landing-wrapper>div.landing-window>div.landing-main>div>div{border-bottom:none}html[device=ipad] #app>div>span:nth-child(3)>div>div>div>div>div>div>div>div.x1n2onr6.xyw6214.x78zum5.x1r8uery.x1iyjqo2.xdt5ytf.x6ikm8r.x1odjw0f.x1hc1fzr>div>div>div>div>div>div:nth-child(2)>div{padding-inline-start:62px}html[device=ipad] .two ._aigw,html[device=ipad] .three ._aigw{flex:0 0 40%;max-width:40%}html[device=ipad] .three ._aohg{max-width:calc(60% - 61px);flex:0 0 calc(60% - 60px)}html[device=ipad] div.x1lliihq>div{border-color:transparent}html[device=ipad] #app>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4>div.x1lliihq>div>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl.x1ism021.x1w450gt>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.xamitd3.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1cy8zhl{flex-grow:0}@media screen and (max-width: 375px){html[device=ipad] #app div.x1lliihq>div{width:100vw}}@media screen and (max-width: 1090px){html[device=ipad] #app div.x1lliihq>div{margin:auto}html[device=ipad] #app div.x1lliihq>div>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl.x1ism021.x1w450gt>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.x1n2onr6.x5zbcu4.x1dnwe82.x8vdgqj{margin-left:0}html[device=ipad] #app div.x1lliihq>div>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl.x1ism021.x1w450gt>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1cy8zhl{align-items:center;gap:8px}}html[device=ipad] #app div.x1lliihq>div>div{align-items:center}@media (min-width: 768px) and (max-width: 959px){html[device=ipad] .two ._aigw,html[device=ipad] .three ._aigw{flex:0 0 38%;max-width:38%}html[device=ipad] .three ._aohg{max-width:calc(62% - 61px);flex:0 0 calc(62% - 60px)}}@media (orientation: portrait){html[device=ipad] #app .x1ism021.x1ism021{flex-wrap:wrap-reverse;justify-content:center}html[device=ipad] #app .x5zbcu4.x5zbcu4{padding-bottom:40px}}#app .message-out._amjy{padding-right:32px;padding-left:32px}#app .message-in._amjy{padding-right:32px;padding-left:42px}#app .x1f5nsx6.x1f5nsx6{right:-29px}#app div.x1lliihq div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.x1sy10c2>span>div{white-space:nowrap}#main>div.x1n2onr6.x1vjfegm.x1cqoux5.x14yy4lh>div>div.x10l6tqk.x13vifvy.x17qophe.xyw6214.x9f619.x78zum5.xdt5ytf.xh8yej3.x5yr21d.x6ikm8r.x1rife3k.xjbqb8w.x1ewm37j>div.x3psx0u.xwib8y2.xkhd6sd.xrmvbpv div._amk4._amkq._amk5>div.x6s0dn4.x78zum5.x5yr21d.x47corl.x10l6tqk.x1sz6bgq.x13vifvy.xfo81ep.x1ufv0qf.x1f5nsx6>div.x1n2onr6.x1rg5ohu.x1nxh6w3.xjafh1k.x2b8uid.xlyipyv.x7opvkv.xuxw1ft.xj5tmjb.xzp58vz.xz6pen6.x1hij43t.x13yjgf2.xkvyz64.xw8ag78.x1j6awrg.xoqv437.x1iy59xn.xkj6t0a.x1gmr53x.xopolsa.x1s928wv.x1jcnrxp.xynf4tj.x1e1sk4l.x1x49quv.x1r9ni5o.xhhgppv.x1a1j3ab.x1d52zm6.x24iffn.xmo9yow.x1y1aw1k.xwib8y2.x1ye3gou.xn6708d{display:none}html[device=ipad] #app>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2{height:100%}#app div.x1lliihq>div{background-color:#fff;width:100%}#app div.x1lliihq>div>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl.x1ism021.x1w450gt>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.x1n2onr6.x5zbcu4.x1dnwe82.x8vdgqj{margin-inline-start:0;margin-top:40px}#app #expressions-panel-container>span>div._as8u{max-width:none;width:95%;left:50%!important;transform:translate(-50%) scale(1)!important;bottom:-90vh!important}#expressions-panel-container ._ak1b>div>div{overflow-x:auto}#expressions-panel-container{overflow-x:visible!important}#app>div>span:nth-child(4)>div>div>div>span>div>div>div>div>div:nth-child(3)>div{width:100%}#main div._amk6>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x6s0dn4.x2b8uid.x1rjt51p.x16m5f1z{width:auto}#app>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xbxaen2.x1g2khh7.x1u72gb5.xp9ttsr.x6s0dn4.x9f619.xdounpk.xe4h88v.x1g96xxu.x1t470q2{min-height:auto;min-width:auto;padding:0;background-color:#fff}#app>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xbxaen2.x1g2khh7.x1u72gb5.xp9ttsr.x6s0dn4.x9f619.xdounpk.xe4h88v.x1g96xxu.x1t470q2>div:nth-child(3){display:none}#app>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xbxaen2.x1g2khh7.x1u72gb5.xp9ttsr.x6s0dn4.x9f619.xdounpk.xe4h88v.x1g96xxu.x1t470q2>div:nth-child(1){display:none}#app ._amk4._amkv div[role=button]:has(video),#app ._amk4._amkv div[role=button].has-video-compat{width:100%!important;height:100%!important}#app ._amk4._amkv:has(video),#app ._amk4._amkv.has-video-container-compat{width:100%!important;height:100%!important}#app ._amk4._amkv ._amk6._amlo._amlp .x9f619.xlkrthq.x1n2onr6.x1vjfegm.xyqdw3p.x10ogl3i.xg8j3zb.x1k2j06m{max-width:auto}#app ._amk4._amkv ._amk6._amlo._amlp div[role=button]{width:100%!important}#app #main>:not(span):last-child{display:none}#app>div>span:nth-child(3)>div>div>div>div>div>div>div.x12lqup9.x1o1kx08.x150wa6m>div{width:100%}#app>div>span:nth-child(3)>div>div>div>div>div>div>div.x12lqup9.x1o1kx08.x150wa6m>div svg{width:100%;height:100%}#app>div>div>div:not(#wa-popovers-bucket){min-width:auto;min-height:auto;padding:0;position:relative;width:100%;overflow-x:hidden;background-color:#fff}#app div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xz9dl7a.xh8yej3.xwzfr38{display:none}#app>div._aiwn.app-wrapper-web.safari-fix.os-mac>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xp22266.xcnrxux.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8.xh8yej3.xwzfr38>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4{display:none}#app>div div.x1lliihq.xh8yej3{display:none}#app>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xgpatz3.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xfex06f.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x1cy8zhl{display:none}#app>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4>div:nth-child(2)>div{width:100%;padding:0;border-radius:0;border:none}#app>div._aiwn.app-wrapper-web.safari-fix.os-mac>div>div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.xxfop4>div:nth-child(1)>div{display:none}#app>div.app-wrapper-web>div>div.x78zum5.xdt5ytf.x5yr21d>div>div.x10l6tqk.x13vifvy.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl.x1lzxqs6.x1oy9qf3.xpilrb4.x1t7ytsu.x1vb5itz{border-inline-start:none}#pane-side div[role=grid] div[role=listitem] .x1n2onr6 ._ak8h img,#pane-side div[role=grid] div[role=listitem] .x1n2onr6 ._ak8h svg{outline:none;border:1px solid var(--avatar-placeholder-background)}.x4u6w88{outline:none}";
    let style = document.createElement("style");
    let head = document.head || document.getElementsByTagName("head")[0];
    style.setAttribute("type", "text/css");
    let textNode = document.createTextNode(styleText);
    style.appendChild(textNode);
    head.appendChild(style);
    // console.log("insert style tag!");
}
function isIpadOS() {
    // Use userAgentData instead of deprecated navigator.platform
    if (navigator.userAgentData) {
        const platformInfo = navigator.userAgentData.platform;
        return platformInfo === "macOS" || platformInfo === "iPad";
    }
    // Fallback for older browsers
    return (
        /iPad/.test(navigator.userAgent) ||
        (navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 1 &&
            /MacIntel/.test(navigator.userAgent))
    );
}
function getFormatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day} ${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}:${second < 10 ? "0" + second : second}`;
}
class Logger {
    constructor(module = "Global") {
        this.module = module;
    }
    debug(str) {
        let date = getFormatDate(new Date());
        // console.log(`[DEBUG] ${date} [${this.module}] ${str}`);
    }
    warn(str) {
        let date = getFormatDate(new Date());
        console.log(`[WARN] ${date} [${this.module}] ${str}`);
    }
    error(str) {
        let date = getFormatDate(new Date());
        console.error(`[ERROR] ${date} [${this.module}] ${str}`);
    }
}
class WebkitCallback {
    constructor() {
        this.logger = new Logger("Callback");
    }
    webkitMessageHandler(postMessage) {
        if (postMessage) {
            if (window.webkit) {
                window.webkit.messageHandlers.nativeBridge.postMessage(
                    JSON.stringify(postMessage),
                );
            }
        }
    }
    loginCallback(account, auto = false) {
        try {
            this.webkitMessageHandler({
                listener: "login",
                account: account || null,
                auto,
                callback: null,
            });
            this.logger.debug(`login callback has been called.
account:\r${account}
auto:\r${auto}`);
        } catch (err) {
            this.logger.error(`login callback error ${err.message || err}`);
        }
    }
    enterChatListCallback(account, isScanQRLogin = false) {
        try {
            this.webkitMessageHandler({
                listener: "enterChatList",
                auto: !isScanQRLogin,
                callback: null,
            });
            this.logger.debug(`enterChatList callback has been called.
account:\r${account}
auto:\r${!isScanQRLogin}`);
        } catch (err) {
            this.logger.error(
                `enterChatList callback error ${err.message || err}`,
            );
        }
    }
    logoutCallback() {
        try {
            this.webkitMessageHandler({ listener: "logout", callback: null });
            this.logger.debug(`logout callback has been called`);
        } catch (err) {
            this.logger.error(`logout callback error ${err.message || err}`);
        }
    }
    exitChatCallback(chatId) {
        try {
            this.webkitMessageHandler({
                listener: "exitChat",
                chatId: chatId || null,
                callback: null,
            });
            this.logger.debug(`exitChat callback has been called.
chatId:\r${chatId}`);
        } catch (err) {
            this.logger.error(`exitChat callback error ${err.message || err}`);
        }
    }
    enterChatCallback(chatId) {
        try {
            this.webkitMessageHandler({
                listener: "enterChat",
                chatId: chatId || null,
                callback: null,
            });
            this.logger.debug(`enterChat callback has been called.
chatId:\r${chatId}`);
        } catch (err) {
            this.logger.error(`enterChat callback error ${err.message || err}`);
        }
    }
    sendMessageCallback(chatId) {
        try {
            this.webkitMessageHandler({
                listener: "sendMessage",
                chatId: chatId || null,
                callback: null,
            });
            this.logger.debug(`sendMessage callback has been called.
chatId:\r${chatId}`);
        } catch (err) {
            this.logger.error(
                `sendMessage callback error ${err.message || err}`,
            );
        }
    }
    chatLimitedCallback() {
        try {
            this.webkitMessageHandler({
                listener: "chatLimited",
                callback: null,
            });
            this.logger.debug(`chatLimited callback`);
        } catch (err) {
            this.logger.error(
                `sendMessage callback error ${err.message || err}`,
            );
        }
    }
    sendFile(fileData) {
        try {
            this.webkitMessageHandler({
                listener: "sendFile",
                fileData: fileData || null,
                callback: null,
            });
            this.logger.debug(`sendFile callback`);
        } catch (err) {
            this.logger.error(`sendFile callback error ${err.message || err}`);
        }
    }
}
const globalData = {
    currentChatId: "",
    isScanQRLogin: false,
    account: null,
    isMessageOpen: false,
    isChatLimited: false,
    isTabBtnGroupClickRegister: false,
    isNavBtnGroupClickRegister: false,
    isIpadOS: false,
    loginType: "qrCode",
};
const LOGIN_TYPE = {
    QR_CODE: "qrCode",
    PHONE_NUMBER: "phoneNumber",
    ACTIVE_CODE: "activeCode",
};
function getIsChatLimited() {
    return globalData.isChatLimited;
}
function appendDrawerShadow() {
    let drawerShadow = document.querySelector("html div.drawer-shadow");
    if (!drawerShadow) {
        drawerShadow = document.createElement("div");
        drawerShadow.classList.add("drawer-shadow");
        const root = document.querySelector(
            "#app > div > div > div > div.two._aigs > header",
        );
        drawerShadow.onclick = function () {
            document.documentElement.classList.remove("nav-open");
        };
        root.appendChild(drawerShadow);
    }
}
function appendExpendLeftBtn(id, h1Path, needDelay, delayTime) {
    // console.log(id);
    // console.log(h1Path);
    // console.log(needDelay);
    let expendLeftBtn = document.querySelector("#" + id);
    if (expendLeftBtn) {
        expendLeftBtn.remove();
    }
    if (needDelay) {
        let timer = null;
        let count = 30;
        timer = setInterval(() => {
            let h1 = document.querySelector(h1Path);
            if (h1) {
                if (!document.getElementById(id)) {
                    const newDom = document.createElement("div");
                    newDom.classList.add("expend-btn");
                    newDom.id = id;
                    newDom.innerHTML =
                        '<svg t="1725416924812" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="https://www.w3.org/2000/svg" p-id="1830" width="20" height="20"><path d="M96 160h832c19.2 0 32 12.8 32 32s-12.8 32-32 32h-832c-19.2 0-32-12.8-32-32s12.8-32 32-32z m0 320h832c19.2 0 32 12.8 32 32s-12.8 32-32 32h-832c-19.2 0-32-12.8-32-32s12.8-32 32-32z m0 320h832c19.2 0 32 12.8 32 32s-12.8 32-32 32h-832c-19.2 0-32-12.8-32-32s12.8-32 32-32z" fill="#111b21" p-id="1831"></path></svg>';
                    newDom.onclick = function () {
                        document.documentElement.classList.add("nav-open");
                    };
                    h1.parentElement.insertBefore(newDom, h1);
                    h1.parentElement.style.display = "flex";
                    h1.parentElement.style.alignItems = "center";
                    h1.parentElement.style.columnGap = "8px";
                }
            }
            count--;
            if (count <= 0) {
                clearInterval(timer);
                timer = null;
            }
        }, 100);
    } else {
        let h1 = document.querySelector(h1Path);
        if (h1) {
            const newDom = document.createElement("div");
            newDom.classList.add("expend-btn");
            newDom.id = id;
            newDom.innerHTML =
                '<svg t="1725416924812" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="https://www.w3.org/2000/svg" p-id="1830" width="20" height="20"><path d="M96 160h832c19.2 0 32 12.8 32 32s-12.8 32-32 32h-832c-19.2 0-32-12.8-32-32s12.8-32 32-32z m0 320h832c19.2 0 32 12.8 32 32s-12.8 32-32 32h-832c-19.2 0-32-12.8-32-32s12.8-32 32-32z m0 320h832c19.2 0 32 12.8 32 32s-12.8 32-32 32h-832c-19.2 0-32-12.8-32-32s12.8-32 32-32z" fill="#111b21" p-id="1831"></path></svg>';
            newDom.onclick = function () {
                document.documentElement.classList.add("nav-open");
            };
            h1.parentElement.insertBefore(newDom, h1);
            h1.parentElement.style.display = "flex";
            h1.parentElement.style.alignItems = "center";
        }
    }
}
let currentTabIndex = 0;
let two_aigsExtraClassName = "";
class Locales {
    constructor() {
        this.locales = {
            en: {
                title: "How To Link WhatsApp",
                menuIconText: "Menu",
                settingIconText: "Settings",
                secondTip: "Tap #settingIcon# or #menuIcon# on WhatsApp.",
            },
            zh: {
                title: "如何关联 WhatsApp",
                menuIconText: "菜单",
                settingIconText: "设置",
                secondTip: "在WhatsApp上点击 #settingIcon# 或 #menuIcon#。",
            },
            "zh-CN": {
                title: "如何关联 WhatsApp",
                menuIconText: "菜单",
                settingIconText: "设置",
                secondTip: "在WhatsApp上点击 #settingIcon# 或 #menuIcon#。",
            },
            "zh-HK": {
                title: "如何連結 WhatsApp",
                menuIconText: "選單",
                settingIconText: "設定",
                secondTip: "點擊 #settingIcon# 或 #menuIcon# 在 WhatsApp 上。",
            },
            "zh-TW": {
                title: "如何連結 WhatsApp",
                menuIconText: "選單",
                settingIconText: "設定",
                secondTip: "點擊 #settingIcon# 或 #menuIcon# 在 WhatsApp 上。",
            },
            ja: {
                title: "WhatsAppをリンクする方法",
                menuIconText: "メニュー",
                settingIconText: "設定",
                secondTip:
                    "WhatsAppで#settingIcon#または#menuIcon#をタップします。",
            },
            ko: {
                title: "WhatsApp를 연결하는 방법",
                menuIconText: "메뉴",
                settingIconText: "설정",
                secondTip:
                    "WhatsApp에서 #settingIcon# 또는 #menuIcon# 를 탭하세요.",
            },
            fr: {
                title: "Comment connecter WhatsApp",
                menuIconText: "Menu",
                settingIconText: "Paramètres",
                secondTip:
                    "Appuyez sur #settingIcon# ou #menuIcon# dans WhatsApp.",
            },
            de: {
                title: "Wie man WhatsApp hinzufügt",
                menuIconText: "Menü",
                settingIconText: "Einstellungen",
                secondTip:
                    "Tippe auf #settingIcon# oder #menuIcon# in WhatsApp.",
            },
            es: {
                title: "Cómo enlazar WhatsApp",
                menuIconText: "Menú",
                settingIconText: "Ajustes",
                secondTip: "Toca #settingIcon# o #menuIcon# en WhatsApp.",
            },
            "es-ES": {
                title: "Cómo vincular WhatsApp",
                menuIconText: "Menú",
                settingIconText: "Ajustes",
                secondTip: "Toca #settingIcon# o #menuIcon# en WhatsApp.",
            },
            "es-MX": {
                title: "Cómo vincular WhatsApp",
                menuIconText: "Menú",
                settingIconText: "Ajustes",
                secondTip: "Toca #settingIcon# o #menuIcon# en WhatsApp.",
            },
            it: {
                title: "Come collegare WhatsApp",
                menuIconText: "Menu",
                settingIconText: "Impostazioni",
                secondTip: "Tocca #settingIcon# o #menuIcon# su WhatsApp.",
            },
            pt: {
                title: "Como associar o WhatsApp",
                menuIconText: "Menu",
                settingIconText: "Definições",
                secondTip: "Toque em #settingIcon# ou #menuIcon# no WhatsApp.",
            },
            "pt-PT": {
                title: "Como associar o WhatsApp",
                menuIconText: "Menu",
                settingIconText: "Definições",
                secondTip: "Toque em #settingIcon# ou #menuIcon# no WhatsApp.",
            },
            "pt-BR": {
                title: "Como conectar o WhatsApp",
                menuIconText: "Menu",
                settingIconText: "Configurações",
                secondTip: "Toque em #settingIcon# ou #menuIcon# no WhatsApp.",
            },
            ru: {
                title: "Как связать WhatsApp",
                menuIconText: "Меню",
                settingIconText: "Настройки",
                secondTip: "Нажмите #settingIcon# или #menuIcon# в WhatsApp.",
            },
            th: {
                title: "วิธีเชื่อมโยง WhatsApp",
                menuIconText: "Menu",
                settingIconText: "Settings",
                secondTip: "แตะ #settingIcon# หรือ #menuIcon# บน WhatsApp.",
            },
            ar: {
                title: "كيفية ربط WhatsApp",
                settingIconText: "الإعدادات",
                menuIconText: "القائمة",
                secondTip: "اضغط على #settingIcon# أو #menuIcon# في واتساب.",
            },
            tr: {
                title: `WhatsApp nasıl bağlanır`,
                menuIconText: "Menü",
                settingIconText: "Ayarlar",
                secondTip:
                    "WhatsApp'ta #settingIcon# veya #menuIcon#'ye dokunun.",
            },
            vi: {
                title: "Cách liên kết WhatsApp",
                menuIconText: "Menu",
                settingIconText: "Cài đặt",
                secondTip:
                    "Chạm vào #settingIcon# hoặc #menuIcon# trên WhatsApp.",
            },
            id: {
                title: "Cara menautkan WhatsApp",
                menuIconText: "Menu",
                settingIconText: "Pengaturan",
                secondTip: "Ketuk #settingIcon# atau #menuIcon# di WhatsApp.",
            },
            ca: {
                title: "Com enllaçar WhatsApp",
                menuIconText: "Menú",
                settingIconText: "Configuració",
                secondTip: "Toque #settingIcon# o #menuIcon# a WhatsApp.",
            },
            nl: {
                title: "Hoe WhatsApp te koppelen",
                menuIconText: "Menu",
                settingIconText: "Instellingen",
                secondTip: "Tik op #settingIcon# of #menuIcon# in WhatsApp.",
            },
            ms: {
                title: "",
                menuIconText: "Menu",
                settingIconText: "Tetapan",
                secondTip: "Ketuk #settingIcon# atau #menuIcon# di WhatsApp.",
            },
        };
        this.languages = [
            "en",
            "zh",
            "zh-CN",
            "zh-HK",
            "zh-TW",
            "ja",
            "ko",
            "fr",
            "de",
            "es",
            "es-ES",
            "es-MX",
            "it",
            "pt",
            "pt-PT",
            "pt-BR",
            "ru",
            "th",
            "ar",
            "tr",
            "vi",
            "id",
            "ca",
            "nl",
            "sv",
            "ms",
        ];
    }
    getLang(lang) {
        let language = this.languages.find((e) => e === lang);
        if (!language) {
            if (lang.includes("-")) {
                const splits = lang.split("-");
                return this.getLang(splits[0]);
            }
        }
        return language;
    }
    findByLang(lang) {
        if (lang.includes("_")) {
            lang = lang.replace(/_/g, "-");
        }
        let filterLang = this.getLang(lang);
        // console.log("filterLang", filterLang);
        let locale = this.locales[filterLang];
        return locale;
    }
}
const locales = new Locales();
function updateLoginPageTips() {
    // console.log(1);
    let lang = localStorage.getItem("WALangPhonePref");
    lang = JSON.parse(lang);
    if (lang.includes("_")) {
        lang = lang.replace(/_/g, "-");
    }
    const locale = locales.findByLang(lang);
    if (!locale) {
        return;
    }
    const secondTip = document.querySelector(
        "#link-device-instructions-list > li:nth-child(2) > div:last-child",
    );
    const legacySecondTip = document.querySelector(
        "#link-device-instructions-list > li:nth-child(2) > div.x78zum5.x6s0dn4.xl56j7k.xvy4d1p.xxk0z11.x2lah0s.x1gnnqk1.x12peec7.x1mqxbix.x178xt8z.x1lun4ml.xso031l.xpilrb4.x13fuv20.x18b5jzi.x1q0q8m5.x1t7ytsu.xpypsur.x1fe0zbt.x249io5.xtq6bvn.x1c9tyrk.xeusxvb.x1pahc9y.x1ertn4p",
    );
    if (secondTip) {
        const menuIcon = `<strong class="x1rg5ohu xk50ysn x1o2sk6j">${locale.menuIconText} <div class="x6s0dn4 x1rg5ohu x16dsc37 x9fbagp x13g9yo xnmiut x1808543 x3ral8k x1rcc7c0 xbtbmw4 x1lie4ck x16hxpj1 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xxk0z11 x9f619 x1nn3v0j x1120s5i"><span aria-hidden="true" data-icon="menu" class=""><svg viewBox="0 0 24 24" height="20" width="18" preserveAspectRatio="xMidYMid meet" class="x1ks1olk x1hql6x6" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>menu</title><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg></span></div></strong>`;
        const settingIcon = `<strong class="x1rg5ohu xk50ysn x1o2sk6j">${locale.settingIconText} <div class="x6s0dn4 x1rg5ohu x16dsc37 x9fbagp x13g9yo xnmiut x1808543 x3ral8k x1rcc7c0 xbtbmw4 x1lie4ck x16hxpj1 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xxk0z11 x9f619 x1nn3v0j xg83lxy x1120s5i x1h0ha7o"><span aria-hidden="true" data-icon="settings-iphone" class=""><svg viewBox="0 0 20 20" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="x1ks1olk x1hql6x6" fill="none"><title>settings-iphone</title><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6288 18.226L10.6289 18.226L10.6818 18.2213L11.1525 19.1073C11.2424 19.3011 11.4155 19.391 11.6508 19.3564C11.8723 19.3218 12.0038 19.1765 12.0315 18.955L12.1769 17.9652C12.6129 17.8475 13.0421 17.6814 13.4574 17.5014L14.1911 18.1521C14.3503 18.3113 14.5441 18.332 14.7587 18.2213C14.9386 18.1175 15.0078 17.9375 14.9732 17.7091L14.7656 16.7331C15.1324 16.477 15.4923 16.1863 15.8177 15.861L16.7244 16.2417C16.9321 16.3317 17.1189 16.2901 17.2851 16.0963C17.4304 15.9371 17.4443 15.7364 17.3197 15.5495L16.7936 14.6982C17.0566 14.3313 17.2712 13.9298 17.465 13.5145L18.4687 13.563C18.6902 13.5768 18.8632 13.4661 18.9324 13.2515C19.0016 13.0439 18.9393 12.8501 18.7663 12.7116L17.9911 12.0956C18.1018 11.6665 18.1918 11.2165 18.2264 10.7459L19.1678 10.4482C19.3823 10.3721 19.5 10.2198 19.5 9.99141C19.5 9.76992 19.3823 9.61764 19.1678 9.5415L18.2264 9.24387C18.1918 8.7732 18.1018 8.33021 17.9911 7.89414L18.7663 7.27119C18.9393 7.1466 18.9947 6.95972 18.9324 6.74515C18.8632 6.5375 18.6902 6.41983 18.4687 6.43367L17.465 6.4752C17.2712 6.05298 17.0566 5.65844 16.7936 5.29159L17.3197 4.44023C17.4443 4.26026 17.4304 4.05954 17.2851 3.90034C17.1189 3.70653 16.9321 3.665 16.7244 3.75498L15.8177 4.12875C15.4923 3.81036 15.1324 3.51272 14.7656 3.25662L14.9732 2.29451C15.0078 2.05917 14.9386 1.87229 14.7587 1.77538C14.5679 1.67079 14.3936 1.67557 14.2454 1.78974L13.4574 2.48832C13.0421 2.30143 12.6129 2.14915 12.1769 2.03149L12.0315 1.04861C12.0038 0.820192 11.8654 0.674837 11.6508 0.640228C11.4155 0.612542 11.2424 0.695602 11.1525 0.875565L10.6818 1.76846L10.2265 1.74488C10.1511 1.74231 10.075 1.74077 9.99654 1.74077C9.79063 1.74077 9.59596 1.75203 9.38212 1.76438L9.31129 1.76846L8.84754 0.875565C8.75756 0.695602 8.5776 0.612542 8.34226 0.640228C8.12769 0.674837 7.98925 0.820192 7.96157 1.04861L7.82313 2.02456C7.38015 2.14915 6.951 2.29451 6.5357 2.48832L5.80893 1.8446C5.64281 1.6854 5.449 1.66464 5.24135 1.77538C5.05446 1.87229 4.98525 2.05917 5.02678 2.29451L5.23443 3.25662C4.86066 3.51272 4.50073 3.81036 4.18233 4.12875L3.26867 3.75498C3.06794 3.665 2.88106 3.70653 2.71494 3.90034C2.56958 4.05954 2.55574 4.26026 2.67341 4.44023L3.20638 5.29159C2.94335 5.65844 2.72878 6.05298 2.52805 6.4752L1.53133 6.43367C1.30984 6.41983 1.13679 6.5375 1.06758 6.74515C0.991439 6.95972 1.04681 7.1466 1.2337 7.27119L2.00893 7.89414C1.89818 8.33021 1.8082 8.7732 1.78051 9.23695L0.83224 9.5415C0.610747 9.61764 0.5 9.763 0.5 9.99141C0.5 10.2198 0.610747 10.3721 0.83224 10.4482L1.78051 10.7459C1.8082 11.2165 1.89126 11.6665 2.00893 12.0956L1.2337 12.7116C1.05373 12.8431 0.998361 13.0369 1.06758 13.2515C1.13679 13.4661 1.30984 13.5768 1.53133 13.563L2.52805 13.5145C2.72186 13.9298 2.94335 14.3313 3.19945 14.6982L2.67341 15.5495C2.54882 15.7364 2.56266 15.9371 2.71494 16.0963C2.88106 16.2901 3.06794 16.3317 3.26867 16.2417L4.18233 15.861C4.50073 16.1863 4.86066 16.477 5.23443 16.7331L5.02678 17.7091C4.98525 17.9375 5.05446 18.1175 5.24135 18.2282C5.45592 18.332 5.64281 18.3113 5.80893 18.1521L6.5357 17.5014C6.951 17.6814 7.38015 17.8475 7.82313 17.9652L7.96157 18.955C7.98925 19.1765 8.12769 19.3218 8.34918 19.3634C8.5776 19.391 8.75756 19.3011 8.84754 19.1073L9.31129 18.2213C9.53971 18.242 9.76812 18.2628 9.99654 18.2628C10.2141 18.2628 10.4139 18.2451 10.6288 18.226ZM12.0869 9.48613C11.7408 8.4548 10.9448 7.85262 9.9827 7.85262C9.81658 7.85262 9.64353 7.87338 9.38051 7.9426L6.86794 3.63039C7.80237 3.16664 8.86138 2.90362 9.99654 2.90362C13.7689 2.90362 16.7313 5.78303 16.9805 9.48613H12.0869ZM5.95428 4.17721C4.15464 5.45772 3.00565 7.57575 3.00565 9.99833C3.00565 12.4071 4.1408 14.5113 5.91967 15.7918L8.50146 11.5557C8.03078 11.092 7.80929 10.5867 7.80929 10.0329C7.80929 9.47229 8.0377 8.95316 8.48761 8.50325L5.95428 4.17721ZM8.90291 10.026C8.90291 9.42384 9.4082 8.94624 9.98962 8.94624C10.5987 8.94624 11.0971 9.42384 11.0971 10.026C11.0971 10.6282 10.5987 11.1196 9.98962 11.1196C9.41512 11.1196 8.90291 10.6282 8.90291 10.026ZM6.83333 16.3455C7.77468 16.8231 8.84754 17.0931 9.99654 17.0931C13.7619 17.0931 16.7175 14.2206 16.9805 10.5244H12.0869C11.7546 11.5834 10.9587 12.2133 9.9827 12.2133C9.81658 12.2133 9.64353 12.1925 9.39435 12.1302L6.83333 16.3455Z" fill="currentColor"></path></svg></span></div></strong>`;
        secondTip.innerHTML = locale.secondTip
            .replace("#menuIcon#", menuIcon)
            .replace("#settingIcon#", settingIcon);
    } else if (legacySecondTip) {
        const menuIcon = `<strong class="x1rg5ohu xk50ysn x1o2sk6j">${locale.menuIconText} <div class="x6s0dn4 x1rg5ohu x16dsc37 x9fbagp x13g9yo xnmiut x1808543 x3ral8k x1rcc7c0 xbtbmw4 x1lie4ck x16hxpj1 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xxk0z11 x9f619 x1nn3v0j x1120s5i"><span aria-hidden="true" data-icon="menu" class=""><svg viewBox="0 0 24 24" height="20" width="18" preserveAspectRatio="xMidYMid meet" class="x1ks1olk x1hql6x6" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>menu</title><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg></span></div></strong>`;
        const settingIcon = `<strong class="x1rg5ohu xk50ysn x1o2sk6j">${locale.settingIconText} <div class="x6s0dn4 x1rg5ohu x16dsc37 x9fbagp x13g9yo xnmiut x1808543 x3ral8k x1rcc7c0 xbtbmw4 x1lie4ck x16hxpj1 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xxk0z11 x9f619 x1nn3v0j xg83lxy x1120s5i x1h0ha7o"><span aria-hidden="true" data-icon="settings-iphone" class=""><svg viewBox="0 0 20 20" height="18" width="18" preserveAspectRatio="xMidYMid meet" class="x1ks1olk x1hql6x6" fill="none"><title>settings-iphone</title><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6288 18.226L10.6289 18.226L10.6818 18.2213L11.1525 19.1073C11.2424 19.3011 11.4155 19.391 11.6508 19.3564C11.8723 19.3218 12.0038 19.1765 12.0315 18.955L12.1769 17.9652C12.6129 17.8475 13.0421 17.6814 13.4574 17.5014L14.1911 18.1521C14.3503 18.3113 14.5441 18.332 14.7587 18.2213C14.9386 18.1175 15.0078 17.9375 14.9732 17.7091L14.7656 16.7331C15.1324 16.477 15.4923 16.1863 15.8177 15.861L16.7244 16.2417C16.9321 16.3317 17.1189 16.2901 17.2851 16.0963C17.4304 15.9371 17.4443 15.7364 17.3197 15.5495L16.7936 14.6982C17.0566 14.3313 17.2712 13.9298 17.465 13.5145L18.4687 13.563C18.6902 13.5768 18.8632 13.4661 18.9324 13.2515C19.0016 13.0439 18.9393 12.8501 18.7663 12.7116L17.9911 12.0956C18.1018 11.6665 18.1918 11.2165 18.2264 10.7459L19.1678 10.4482C19.3823 10.3721 19.5 10.2198 19.5 9.99141C19.5 9.76992 19.3823 9.61764 19.1678 9.5415L18.2264 9.24387C18.1918 8.7732 18.1018 8.33021 17.9911 7.89414L18.7663 7.27119C18.9393 7.1466 18.9947 6.95972 18.9324 6.74515C18.8632 6.5375 18.6902 6.41983 18.4687 6.43367L17.465 6.4752C17.2712 6.05298 17.0566 5.65844 16.7936 5.29159L17.3197 4.44023C17.4443 4.26026 17.4304 4.05954 17.2851 3.90034C17.1189 3.70653 16.9321 3.665 16.7244 3.75498L15.8177 4.12875C15.4923 3.81036 15.1324 3.51272 14.7656 3.25662L14.9732 2.29451C15.0078 2.05917 14.9386 1.87229 14.7587 1.77538C14.5679 1.67079 14.3936 1.67557 14.2454 1.78974L13.4574 2.48832C13.0421 2.30143 12.6129 2.14915 12.1769 2.03149L12.0315 1.04861C12.0038 0.820192 11.8654 0.674837 11.6508 0.640228C11.4155 0.612542 11.2424 0.695602 11.1525 0.875565L10.6818 1.76846L10.2265 1.74488C10.1511 1.74231 10.075 1.74077 9.99654 1.74077C9.79063 1.74077 9.59596 1.75203 9.38212 1.76438L9.31129 1.76846L8.84754 0.875565C8.75756 0.695602 8.5776 0.612542 8.34226 0.640228C8.12769 0.674837 7.98925 0.820192 7.96157 1.04861L7.82313 2.02456C7.38015 2.14915 6.951 2.29451 6.5357 2.48832L5.80893 1.8446C5.64281 1.6854 5.449 1.66464 5.24135 1.77538C5.05446 1.87229 4.98525 2.05917 5.02678 2.29451L5.23443 3.25662C4.86066 3.51272 4.50073 3.81036 4.18233 4.12875L3.26867 3.75498C3.06794 3.665 2.88106 3.70653 2.71494 3.90034C2.56958 4.05954 2.55574 4.26026 2.67341 4.44023L3.20638 5.29159C2.94335 5.65844 2.72878 6.05298 2.52805 6.4752L1.53133 6.43367C1.30984 6.41983 1.13679 6.5375 1.06758 6.74515C0.991439 6.95972 1.04681 7.1466 1.2337 7.27119L2.00893 7.89414C1.89818 8.33021 1.8082 8.7732 1.78051 9.23695L0.83224 9.5415C0.610747 9.61764 0.5 9.763 0.5 9.99141C0.5 10.2198 0.610747 10.3721 0.83224 10.4482L1.78051 10.7459C1.8082 11.2165 1.89126 11.6665 2.00893 12.0956L1.2337 12.7116C1.05373 12.8431 0.998361 13.0369 1.06758 13.2515C1.13679 13.4661 1.30984 13.5768 1.53133 13.563L2.52805 13.5145C2.72186 13.9298 2.94335 14.3313 3.19945 14.6982L2.67341 15.5495C2.54882 15.7364 2.56266 15.9371 2.71494 16.0963C2.88106 16.2901 3.06794 16.3317 3.26867 16.2417L4.18233 15.861C4.50073 16.1863 4.86066 16.477 5.23443 16.7331L5.02678 17.7091C4.98525 17.9375 5.05446 18.1175 5.24135 18.2282C5.45592 18.332 5.64281 18.3113 5.80893 18.1521L6.5357 17.5014C6.951 17.6814 7.38015 17.8475 7.82313 17.9652L7.96157 18.955C7.98925 19.1765 8.12769 19.3218 8.34918 19.3634C8.5776 19.391 8.75756 19.3011 8.84754 19.1073L9.31129 18.2213C9.53971 18.242 9.76812 18.2628 9.99654 18.2628C10.2141 18.2628 10.4139 18.2451 10.6288 18.226ZM12.0869 9.48613C11.7408 8.4548 10.9448 7.85262 9.9827 7.85262C9.81658 7.85262 9.64353 7.87338 9.38051 7.9426L6.86794 3.63039C7.80237 3.16664 8.86138 2.90362 9.99654 2.90362C13.7689 2.90362 16.7313 5.78303 16.9805 9.48613H12.0869ZM5.95428 4.17721C4.15464 5.45772 3.00565 7.57575 3.00565 9.99833C3.00565 12.4071 4.1408 14.5113 5.91967 15.7918L8.50146 11.5557C8.03078 11.092 7.80929 10.5867 7.80929 10.0329C7.80929 9.47229 8.0377 8.95316 8.48761 8.50325L5.95428 4.17721ZM8.90291 10.026C8.90291 9.42384 9.4082 8.94624 9.98962 8.94624C10.5987 8.94624 11.0971 9.42384 11.0971 10.026C11.0971 10.6282 10.5987 11.1196 9.98962 11.1196C9.41512 11.1196 8.90291 10.6282 8.90291 10.026ZM6.83333 16.3455C7.77468 16.8231 8.84754 17.0931 9.99654 17.0931C13.7619 17.0931 16.7175 14.2206 16.9805 10.5244H12.0869C11.7546 11.5834 10.9587 12.2133 9.9827 12.2133C9.81658 12.2133 9.64353 12.1925 9.39435 12.1302L6.83333 16.3455Z" fill="currentColor"></path></svg></span></div></strong>`;
        legacySecondTip.innerHTML = locale.secondTip
            .replace("#menuIcon#", menuIcon)
            .replace("#settingIcon#", settingIcon);
    }
}
function insertDir() {
    const html = document.documentElement;
    const lang = html.getAttribute("lang");
    if (lang.startsWith("ar")) {
        html.setAttribute("dir", "rtl");
    } else {
        html.setAttribute("dir", "ltr");
    }
}
function initNavBtn() {
    const checkLoginPage = document.querySelector("._aigs");
    if (checkLoginPage) {
        webkitCallback.enterChatListCallback(
            localStorage.getItem("last-wid-md"),
            globalData.isScanQRLogin,
        );
        const chatList = document.querySelector(
            "div.x1y332i5.x1n2onr6.x6ikm8r.x10wlt62",
        );
        if (chatList) {
            doneAfterContactListComplete();
        }
        const tabButtonGroup = document.querySelectorAll(
            "button.xjb2p0i.x1ypdohk.x972fbf.xcfux6l.x1qhh985.xm0m39n.xzqyx8i.xqa96yk.xvwobac.x1h2y310.x6prxxf.xo1l8bm.x1btupbp.x1yrsyyn.x10b6aqq.x1ye3gou.xn6708d",
        );
        if (!globalData.isTabBtnGroupClickRegister) {
            tabButtonGroup.forEach((item) => {
                item.addEventListener("click", function () {
                    setTimeout(() => {
                        doneAfterContactListComplete();
                    }, 50);
                });
            });
        }
        if (!globalData.isIpadOS) {
            appendExpendLeftBtn(
                "primaryExpendLeftBtn",
                "#app > div > div > div > div.two._aigs > div._aigw > header > header > div > div > h2",
                true,
            );
            two_aigsExtraClassName = document
                .querySelector("div.two._aigs")
                .className.replace("two", "")
                .replace("_aigs", "")
                .trim();
            appendDrawerShadow();
        }
    }
}
const webkitCallback = new WebkitCallback();
function mainMutation() {
    hideWABanner();
    const account = localStorage.getItem("last-wid-md");
    if (typeof account === "string" && account.trim().length > 0) {
        const auto = true;
        const cleanAccount = account.replace(/^"|"$/g, "").split(":")[0];
        globalData.account = cleanAccount;
        webkitCallback.loginCallback(account, auto);
    }
    function clickSendMessageBtn2(event) {
        const lockSendMessage = getIsChatLimited();
        if (lockSendMessage) {
            event.stopPropagation();
            event.preventDefault();
            webkitCallback.chatLimitedCallback();
        } else {
            webkitCallback.sendMessageCallback(globalData.currentChatId);
        }
    }
    function bindSendMessageEvent2(dom) {
        if (dom) {
            dom.removeEventListener("click", clickSendMessageBtn2);
            dom.addEventListener("click", clickSendMessageBtn2);
        }
        return;
    }
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach((mutation) => {
            if (mutation.type === "attributes") {
            } else if (mutation.type === "childList") {
                if (mutation.target.className === "_ak8k") {
                    if (mutation.addedNodes.length > 0) {
                        mutation.addedNodes.forEach((e) => {
                            if (e.className === "x78zum5 x1cy8zhl") {
                                const nextNode = mutation.target.nextSibling;
                                if (nextNode) {
                                    const unreadSpan =
                                        nextNode?.children[0]?.children[0]
                                            ?.children[0];
                                    if (unreadSpan) {
                                        // console.log(unreadSpan.innerText);
                                    }
                                }
                            }
                        });
                    }
                }
                if (
                    mutation.target ==
                    document.querySelector(
                        "app > div > div.x78zum5.xdt5ytf.x5yr21d > div > div > div.x10l6tqk.x13vifvy.x1o0tod.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl > div._aigw > div > span",
                    )
                ) {
                    if (mutation.addedNodes.length > 0) {
                        if (!globalData.isIpadOS) {
                            if (currentTabIndex === 1) {
                                appendExpendLeftBtn(
                                    "primaryExpendLeftBtn",
                                    "#app > div > div.x78zum5.xdt5ytf.x5yr21d > div > div.x10l6tqk.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl > div._aigw._as6h.xevlxbw.x9f619.x1n2onr6.x5yr21d.x17dzmu4.x1i1dayz.x2ipvbc.x1w8yi2h.x78zum5.xdt5ytf.xd32934.x18dvir5.xxljpkc.x1tm2t65.x6ikm8r.x10wlt62.x1ks9yow.xpilrb4.x1t7ytsu.x1m2ixmg > span > div > span > div > div > header > div > div > h2",
                                    true,
                                    500,
                                );
                            } else if (currentTabIndex === 4) {
                                appendExpendLeftBtn(
                                    "settingExpendLeftBtn",
                                    "#app > div > div.x78zum5.xdt5ytf.x5yr21d > div > div.x10l6tqk.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl > div._aigw._as6h.xevlxbw.x9f619.x1n2onr6.x5yr21d.x17dzmu4.x1i1dayz.x2ipvbc.x1w8yi2h.x78zum5.xdt5ytf.xd32934.x18dvir5.xxljpkc.x1tm2t65.x6ikm8r.x10wlt62.x1ks9yow.xpilrb4.x1t7ytsu.x1m2ixmg > span > div > span > div > header > div > div > h2",
                                    true,
                                );
                            } else if (currentTabIndex === 5) {
                                appendExpendLeftBtn(
                                    "settingExpendLeftBtn",
                                    "#app > div > div.x78zum5.xdt5ytf.x5yr21d > div > div.x10l6tqk.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl > div._aigw._as6h.xevlxbw.x9f619.x1n2onr6.x5yr21d.x17dzmu4.x1i1dayz.x2ipvbc.x1w8yi2h.x78zum5.xdt5ytf.xd32934.x18dvir5.xxljpkc.x1tm2t65.x6ikm8r.x10wlt62.x1ks9yow.xpilrb4.x1t7ytsu.x1m2ixmg > span > div > div > span > div > header > div > div > h2",
                                    true,
                                );
                            }
                        }
                    }
                    if (mutation.removedNodes.length > 0) {
                        if (!globalData.isIpadOS) {
                            if (currentTabIndex === 0) {
                                appendExpendLeftBtn(
                                    "primaryExpendLeftBtn",
                                    "#app > div > div.x78zum5.xdt5ytf.x5yr21d > div > div._aigw._as6h.x9f619.x1n2onr6.x5yr21d.x17dzmu4.x1i1dayz.x2ipvbc.x1w8yi2h.x78zum5.xdt5ytf.xa1v5g2.x1plvlek.xryxfnj.xd32934.x18dvir5.xxljpkc.x1tm2t65.x18pi947 > header > header > div > div > h2",
                                    true,
                                );
                            }
                        }
                    }
                }
                if (
                    mutation.target ==
                    document.querySelector(
                        "#app div.x10l6tqk.x13vifvy.x1o0tod.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl > div._aigw > div > span",
                    )
                ) {
                    // console.log("currentTabIndex", currentTabIndex);
                    if (mutation.addedNodes.length > 0) {
                        if (!globalData.isIpadOS) {
                            if (
                                currentTabIndex === 1 ||
                                currentTabIndex === 4 ||
                                currentTabIndex === 5 ||
                                currentTabIndex === 6
                            ) {
                                appendExpendLeftBtn(
                                    "settingExpendLeftBtn",
                                    "#app div.x78zum5.xdt5ytf.x5yr21d  div._aigw > div > span > div > span > div > div > header > div > div > h2",
                                    true,
                                );
                            }
                            if (
                                currentTabIndex === 7 ||
                                currentTabIndex === 8
                            ) {
                                appendExpendLeftBtn(
                                    "settingExpendLeftBtn",
                                    "#app div.x78zum5.xdt5ytf.x5yr21d div._aigw > div > span > div > span > div > header > div > div > h2",
                                    true,
                                );
                            }
                            if (currentTabIndex === 9) {
                                appendExpendLeftBtn(
                                    "settingExpendLeftBtn",
                                    "#app div.x78zum5.xdt5ytf.x5yr21d div._aigw > div > span > div > div > span > div > header > div > div > h2",
                                    true,
                                );
                            }
                        }
                    }
                    if (mutation.removedNodes.length > 0) {
                        if (!globalData.isIpadOS) {
                            if (currentTabIndex === 0) {
                                appendExpendLeftBtn(
                                    "settingExpendLeftBtn",
                                    "#app > div > div > div > div.two._aigs.x1n2onr6.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x1iek97a.x1w3jsh0.xf8xn22.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1g0ag68.xcgwb2z.x4afe7t.x1alahoq.x1j6awrg.x1m1drc7.x1n449xj.x162n7g1.xitxdhh.x134s4mn.x1s928wv.x1setqd9 > div._aigw.x1n2onr6.x5yr21d.x17dzmu4.x78zum5.xdt5ytf.xa1v5g2.x1plvlek.xryxfnj > header > header > div > div.x104kibb.x1iyjqo2.x4osyxg.x6ikm8r.x10wlt62.x1mzt3pk.xo442l1.x1ua5tub.x1y332i5.x117nqv4.x1aueamr.x1wm35g.xj8l9r2 > h2",
                                    true,
                                );
                            }
                        }
                    }
                }
                if (
                    mutation.target ==
                    document.querySelector(
                        "#app > div > div > div > div.two._aigs > div._aigu > div._aohf._aigw._aigx > span",
                    )
                ) {
                    if (mutation.addedNodes.length > 0) {
                        if (
                            mutation.addedNodes[0] ===
                            document.querySelector(
                                "#app > div > div > div > div.two._aigs > div._aigu > div._aohf._aigw._aigx > span > div",
                            )
                        ) {
                            if (!globalData.isIpadOS) {
                                if (currentTabIndex >= 4) {
                                    appendExpendLeftBtn(
                                        "settingExpendLeftBtn",
                                        "#app > div > div > div > div.two._aigs > div._aigu > div._aohf._aigw._aigx > span > div > span > div > header > div > div > h2",
                                        true,
                                    );
                                } else {
                                    if (currentTabIndex == 0) {
                                        return;
                                    }
                                    appendExpendLeftBtn(
                                        "secondExpendLeftBtn",
                                        "#app > div > div > div > div.two._aigs > div._aigu > div._aohf._aigw._aigx > span > div > span > div > div > header > div > div > h2",
                                        true,
                                    );
                                }
                            }
                        }
                    }
                }
                if (
                    mutation.target ==
                    document.querySelector(
                        "#app > div > div > div > div.two._aigs > div._aigu > div._aohf._aigw._aigx > span > div > span",
                    )
                ) {
                    if (mutation.removedNodes.length > 0) {
                        if (mutation.removedNodes[0].classList.length > 0) {
                            if (!globalData.isIpadOS) {
                                if (
                                    document.querySelector(
                                        "#app > div > div > div > div.two._aigs > div._aigu > div._aohf._aigw._aigx > span > div > span > div > div > header > div > div > h2",
                                    )
                                ) {
                                    appendExpendLeftBtn(
                                        "secondExpendLeftBtn",
                                        "#app > div > div > div > div.two._aigs > div._aigu > div._aohf._aigw._aigx > span > div > span > div > div > header > div > div > h2",
                                        true,
                                    );
                                } else if (
                                    document.querySelector(
                                        "#app > div > div > div > div.two._aigs > div._aigu > div._aohf._aigw._aigx > span > div > span > div > header > div > div > h2",
                                    )
                                ) {
                                    if (
                                        document.querySelector(
                                            ".x1okw0bk.x16dsc37.x1ypdohk.xeq5yr9.xfect85",
                                        )
                                    ) {
                                        return;
                                    }
                                    appendExpendLeftBtn(
                                        "secondExpendLeftBtn",
                                        "#app > div > div > div > div.two._aigs > div._aigu > div._aohf._aigw._aigx > span > div > span > div > header > div > div > h2",
                                        true,
                                    );
                                } else {
                                }
                            }
                        }
                    }
                }
                if (
                    mutation.target ==
                        document.querySelector(
                            "#app div.x78zum5.xdt5ytf.x5yr21d > div > div.x9f619.x1n2onr6.xupqr0c.x5yr21d.x6ikm8r.x10wlt62.x17dzmu4.x1i1dayz.x2ipvbc.x1w8yi2h.xyyilfv.x1iyjqo2.xpilrb4.x1t7ytsu.x1m2ixmg",
                        ) ||
                    mutation.target ==
                        document.querySelector(
                            ".x1n2onr6.xyw6214.x5yr21d.x6ikm8r.x10wlt62.x17dzmu4.xyyilfv.x1iyjqo2.xy80clv.x26u7qi.x1ux35ld",
                        ) ||
                    mutation.target ==
                        document.querySelector(
                            "#app div._aiwn div.x78zum5.xdt5ytf.x5yr21d > div > div.x9f619.x1n2onr6.xupqr0c.x5yr21d.x6ikm8r.x10wlt62.x17dzmu4.x1i1dayz.x2ipvbc.xjdofhw.xyyilfv.x1iyjqo2.xpilrb4.x1t7ytsu.x1vb5itz",
                        ) ||
                    mutation.target ===
                        document.querySelector(
                            "#app > div > div > div.x78zum5.xdt5ytf.x5yr21d > div > div.x9f619.x1n2onr6.xupqr0c.x5yr21d.x6ikm8r.x10wlt62.x17dzmu4.x1i1dayz.x2ipvbc.xjdofhw.xyyilfv.x1iyjqo2",
                        )
                ) {
                    if (mutation.addedNodes.length > 0) {
                        const addedNote = mutation.addedNodes[0];
                        if (addedNote === document.querySelector("#main")) {
                            !globalData.isIpadOS && addBackBtn();
                            addSearchBtnListener();
                            addInputListener();
                            addSendBtnListener();
                        }
                    }
                }
                if (
                    mutation.target ===
                    document.querySelector(
                        "#main footer ._ak1r > div > div:last-child",
                    )
                ) {
                    if (mutation.addedNodes.length > 0) {
                        // console.log(mutation.addedNodes[0]);
                        if (
                            mutation.addedNodes[0] ===
                            document.querySelector(
                                "#main > footer > div.x1n2onr6.xhtitgo.x9f619.x78zum5.x1q0g3np.xuk3077.xjbqb8w.x1wiwyrm.xquzyny.xvc5jky.x11t971q.xnpuxes.copyable-area > div > span > div > div > div > div.x9f619.x78zum5.x6s0dn4.xl56j7k.xpvyfi4.x2lah0s.x1c4vz4f.x1fns5xo.x1ba4aug.x1c9tyrk.xeusxvb.x1pahc9y.x1ertn4p.x1pse0pq.xpcyujq.xfn3atn.x1ypdohk.x1m2oepg > div",
                            )
                        ) {
                            addSendBtnListener();
                        } else if (
                            mutation.addedNodes[0] ===
                            document.querySelector(
                                "#main > footer > div.x1n2onr6.xhtitgo.x9f619.x78zum5.x1q0g3np.xuk3077.xjbqb8w.x1wiwyrm.xquzyny.xvc5jky.x11t971q.xnpuxes.copyable-area > div > span > div > div > div > div.x9f619.x78zum5.x6s0dn4.xl56j7k.xpvyfi4.x2lah0s.x1c4vz4f.x1fns5xo.x1ba4aug.x1c9tyrk.xeusxvb.x1pahc9y.x1ertn4p.x1pse0pq.xpcyujq.xfn3atn.x1ypdohk.x1m2oepg > button",
                            )
                        ) {
                            addSendBtnListener();
                        }
                    }
                }
                if (
                    mutation.target ===
                    document.querySelector(
                        "#app > div > div > div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x2lwn1j.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v > div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xgpatz3.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4",
                    )
                ) {
                    const newLandingWrapper = document.querySelector(
                        "#app div._aiwn > div",
                    );
                    if (newLandingWrapper) {
                        globalData.isScanQRLogin = true;
                        updateLoginPageTips();
                        const html = document.documentElement;
                        html.setAttribute(
                            "data-login-type",
                            LOGIN_TYPE.QR_CODE,
                        );
                    }
                }
                if (
                    mutation.target ===
                    document.querySelector(
                        "#app div._aiwn > div > div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.xxfop4 > div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xgpatz3.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4",
                    )
                ) {
                    const landingWrapper = document.querySelector(
                        "#app div._aiwn > div > div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.xxfop4",
                    );
                    // console.log("landingWrapperV2", landingWrapper);
                    if (landingWrapper) {
                        globalData.isScanQRLogin = true;
                        updateLoginPageTips();
                        const html = document.documentElement;
                        html.setAttribute(
                            "data-login-type",
                            LOGIN_TYPE.QR_CODE,
                        );
                    }
                }
                if (
                    mutation.target ===
                    document.querySelector(
                        "#app > div > div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2 > div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4",
                    )
                ) {
                    const landingWrapper = document.querySelector(
                        "#app > div > div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2",
                    );
                    // console.log("landingWrapperV2", landingWrapper);
                    if (landingWrapper) {
                        globalData.isScanQRLogin = true;
                        updateLoginPageTips();
                        const html = document.documentElement;
                        html.setAttribute(
                            "data-login-type",
                            LOGIN_TYPE.QR_CODE,
                        );
                    }
                }
                if (
                    mutation.target ===
                    document.querySelector(".x78zum5.xdt5ytf.x5yr21d")
                ) {
                    initNavBtn();
                }
                if (mutation.target === document.querySelector("#app")) {
                    if (mutation.addedNodes.length > 0) {
                        const landingWrapper = document.querySelector(
                            "#app div > div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xw2csxc.x1odjw0f.xyinxu5.xp48ta0.x1g2khh7.xtssl2i.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v.x1g96xxu.x1t470q2",
                        );
                        const newLandingWrapper = document.querySelector(
                            "#app div._aiwn.app-wrapper-web.safari-fix.os-mac > div",
                        );
                        if (landingWrapper || newLandingWrapper) {
                            globalData.isScanQRLogin = true;
                            updateLoginPageTips();
                            const html = document.documentElement;
                            html.setAttribute(
                                "data-login-type",
                                LOGIN_TYPE.QR_CODE,
                            );
                        } else {
                        }
                        const waWebLoadingScreen =
                            document.querySelector("._alyo");
                        if (waWebLoadingScreen && globalData.isScanQRLogin) {
                            webkitCallback.loginCallback(
                                localStorage.getItem("last-wid-md"),
                                false,
                            );
                        }
                    }
                }
                if (
                    mutation.target ===
                    document.querySelector("#app div.x1lliihq > div")
                ) {
                    if (mutation.addedNodes.length > 0) {
                        const html = document.documentElement;
                        if (
                            document.querySelector("#app div.x1lliihq ._akau")
                        ) {
                            // console.log("扫码");
                            html.setAttribute(
                                "data-login-type",
                                LOGIN_TYPE.QR_CODE,
                            );
                            updateLoginPageTips();
                        }
                        if (
                            document.querySelector(
                                "#app div.x1lliihq > div > div > div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.x1oa3qoh.x12fk4p8:nth-child(4)",
                            )
                        ) {
                            // console.log("手机号");
                            html.setAttribute(
                                "data-login-type",
                                LOGIN_TYPE.PHONE_NUMBER,
                            );
                        }
                        if (
                            document.querySelector(
                                "div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.xeuugli.x2lwn1j.xozqiw3.xamitd3.x7v7x1q.xh8yej3.x1ndca9r.x1a2cdl4.xnhgr82.x1qt0ttw.xgk8upj.x10wjd1d.x1hq5gj4.x1p5oq8j.xwxc41k",
                            )
                        ) {
                            // console.log("验证码");
                            html.setAttribute(
                                "data-login-type",
                                LOGIN_TYPE.ACTIVE_CODE,
                            );
                        }
                    }
                }
                if (
                    mutation.target == document.querySelector(".landing-main")
                ) {
                    if (mutation.addedNodes[0]?.className === "_akk2 _ak94") {
                        updateLoginPageTips();
                    }
                }
                if (
                    mutation.target ===
                    document.querySelector("#app div._aigw > div > span")
                ) {
                    if (!globalData.isIpadOS) {
                        if (mutation.addedNodes.length > 0) {
                            if (currentTabIndex === 0) {
                                doneAfterArchivingContactListComplete(
                                    mutation.target,
                                );
                            }
                        }
                        if (mutation.removedNodes.length > 0) {
                        }
                    }
                }
                if (
                    mutation.target ==
                    document.querySelector(
                        "._aig- span.x10l6tqk.x13vifvy.xds687c.x1ey2m1c.x17qophe",
                    )
                ) {
                    if (!globalData.isIpadOS) {
                        if (mutation.addedNodes.length > 0) {
                            const target2 = document.querySelector("div._aigs");
                            if (globalData.isMessageOpen) {
                                target2.classList.add("is-message-open");
                            }
                        }
                        const target = document.querySelector("div._aigs");
                        if (target.className.includes("two")) {
                            if (globalData.isMessageOpen) {
                                target.classList.add("is-message-open");
                            }
                        }
                        setTimeout(() => {
                            if (target.className.includes("three")) {
                                if (globalData.isMessageOpen) {
                                    target.classList.add("is-message-open");
                                }
                            }
                        }, 500);
                    }
                }
                if (
                    mutation.target ===
                    document.querySelector(
                        ".x10l6tqk.x13vifvy.xds687c.x1ey2m1c.x17qophe",
                    )
                ) {
                    if (!globalData.isIpadOS) {
                        if (mutation.addedNodes.length > 0) {
                            // console.log(currentTabIndex);
                            if (currentTabIndex === 3) {
                                appendExpendLeftBtn(
                                    "settingExpendLeftBtn",
                                    "#app div._aigw header h1",
                                    true,
                                );
                            } else if (currentTabIndex === 4) {
                                appendExpendLeftBtn(
                                    "settingExpendLeftBtn",
                                    "#app div._aigw header h1",
                                    true,
                                );
                            } else if (currentTabIndex === 5) {
                                appendExpendLeftBtn(
                                    "settingExpendLeftBtn",
                                    "#app div._aigw header h1",
                                    true,
                                );
                            }
                        }
                    }
                }
                if (
                    mutation.target ==
                    document.querySelector(
                        "#main > footer > div.x1n2onr6.xhtitgo.x9f619.x78zum5.x1q0g3np.xuk3077.xjbqb8w.x1wiwyrm.xvc5jky.x11t971q.xquzyny.xnpuxes.copyable-area > div > span > div > div._ak1r > div > div.x9f619.x78zum5.x6s0dn4.xl56j7k.xpvyfi4.x2lah0s.x1c4vz4f.x1fns5xo.x1ba4aug.x1c9tyrk.xeusxvb.x1pahc9y.x1ertn4p.x1pse0pq.xpcyujq.xfn3atn.x1ypdohk.x1m2oepg",
                    )
                ) {
                    const button = document.querySelector(
                        "#main > footer > div.x1n2onr6.xhtitgo.x9f619.x78zum5.x1q0g3np.xuk3077.xjbqb8w.x1wiwyrm.xvc5jky.x11t971q.xquzyny.xnpuxes.copyable-area > div > span > div > div._ak1r > div > div.x9f619.x78zum5.x6s0dn4.xl56j7k.xpvyfi4.x2lah0s.x1c4vz4f.x1fns5xo.x1ba4aug.x1c9tyrk.xeusxvb.x1pahc9y.x1ertn4p.x1pse0pq.xpcyujq.xfn3atn.x1ypdohk.x1m2oepg > div > span > div > div",
                    );
                    if (button) {
                        bindSendMessageEvent2(button);
                        addInputListener();
                    }
                } else if (
                    mutation.target ==
                    document.querySelector(
                        "#main > footer .x10l6tqk.x13vifvy.x17qophe",
                    )
                ) {
                    const button = document.querySelector(
                        "button.x1n7h9c3.x1ask5yi.x1s1d1n7.x2jl805.xof5ctd",
                    );
                    if (button) {
                        bindSendMessageEvent2(button);
                    }
                } else if (
                    mutation.target ==
                    document.querySelector(
                        `div._2QgSC div[data-testid="drawer-middle"] span.lhggkp7q.qq0sjtgm.ebjesfe0.jxacihee.tkdu00h0`,
                    )
                ) {
                    const button = document.querySelector("div._3wFFT");
                    if (button) {
                        bindSendMessageEvent2(button);
                    }
                }
                if (
                    mutation.target == document.querySelector("._2A1R8._3YS_f")
                ) {
                    doneAfterContactListComplete();
                }
                if (mutation.target == document.getElementById("pane-side")) {
                    doneAfterContactListComplete();
                }
                if (
                    mutation.target ==
                    document.querySelector(
                        "div.x1y332i5.x1n2onr6.x6ikm8r.x10wlt62",
                    )
                ) {
                    doneAfterContactListComplete();
                }
                if (mutation.target == document.querySelector("div._ajwt")) {
                    const dialog = document.querySelector("._ahmw");
                    if (dialog) {
                        // console.log("编辑弹窗");
                        dialog.style.top = "1px";
                        setTimeout(() => {
                            dialog.style.top = 0;
                        }, 100);
                    }
                }
                if (
                    mutation.target ==
                    document.querySelector(
                        ".app-wrapper-web>span:nth-of-type(2)",
                    )
                ) {
                    if (mutation.addedNodes.length > 0) {
                        const logoutBtn = document.querySelector(
                            'button[data-testid="popup-controls-ok"]',
                        );
                        if (logoutBtn) {
                            if (
                                document.querySelector(
                                    "._aigs.two.is-message-open",
                                )
                            ) {
                                logoutBtn.onclick = function () {
                                    document.querySelector(
                                        "._aigs.two.is-message-open",
                                    ).className = "_aigs two";
                                    doneAfterContactListComplete();
                                };
                            } else {
                                logoutBtn.onclick = function () {
                                    webkitCallback.logoutCallback();
                                };
                            }
                        }
                        return;
                    }
                }
                if (
                    mutation.target ==
                    document.querySelector(
                        ".app-wrapper-web>span:nth-of-type(6)",
                    )
                ) {
                    if (mutation.addedNodes.length > 0) {
                        let buttonIndex = 6;
                        let mainCloseChat = document.querySelector(
                            "#app ._ak4w._ak4x ul > div > div > li:nth-child(6)",
                        );
                        let betaCloseChat = document.querySelector(
                            `#app ._ak4w._ak4x._ap4-._ap4_ ul div:nth-child(${buttonIndex}) li`,
                        );
                        // console.log(mainCloseChat);
                        if (betaCloseChat) {
                            betaCloseChat.addEventListener(
                                "click",
                                function () {
                                    document.querySelector(
                                        "._aigs.two.is-message-open",
                                    ).className = "_aigs two";
                                    globalData.isMessageOpen = false;
                                    doneAfterContactListComplete();
                                },
                            );
                        }
                        if (mainCloseChat) {
                            mainCloseChat.addEventListener(
                                "click",
                                function () {
                                    document.querySelector(
                                        "._aigs.two.is-message-open",
                                    ).className = "_aigs two";
                                    globalData.isMessageOpen = false;
                                    doneAfterContactListComplete();
                                },
                            );
                        }
                        return;
                    }
                }
                if (
                    mutation.target ==
                    document.querySelector(
                        'div[data-testid="drawer-right"]>span',
                    )
                ) {
                    if (mutation.removedNodes.length > 0) {
                        const contactPanel = document.querySelector("._aigs");
                        if (contactPanel) {
                            contactPanel.className =
                                "_aigs two is-message-open";
                        }
                    }
                }
                if (
                    mutation.target ==
                    document.querySelector(
                        "span.lhggkp7q.qq0sjtgm.ebjesfe0.jxacihee.tkdu00h0",
                    )
                ) {
                    if (mutation.addedNodes.length > 0) {
                        if (
                            document.querySelector(
                                'div[data-testid="new-group-drawer-participants"]',
                            )
                        ) {
                        } else {
                            setTimeout(() => {
                                doneAfterContactListComplete(true);
                            }, 100);
                        }
                    }
                }
            } else {
            }
        });
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeOldValue: true,
    });
    const htmlElementObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type == "attributes") {
                const hasNavOpen =
                    document.documentElement.classList.contains("nav-open");
                if (hasNavOpen) {
                    if (!bindNavButtonClick) {
                        const navBtn = document.querySelectorAll(
                            "#app div._aiwn > div > div.x78zum5.xdt5ytf.x5yr21d > div > header > div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1cy8zhl.xh8yej3.x5yr21d > div > div > div > span > button",
                        );
                        navBtn.forEach((e, i) => {
                            e.addEventListener("click", function () {
                                currentTabIndex = i;
                                document.documentElement.classList.remove(
                                    "nav-open",
                                );
                            });
                        });
                        const navBtnBeta = document.querySelectorAll(
                            "#app div._aiwn > div.x78zum5.xdt5ytf.x5yr21d .two._aigs > header button",
                        );
                        navBtnBeta.forEach((e, i) => {
                            e.addEventListener("click", function () {
                                // console.log(e);
                                currentTabIndex = i;
                                document.documentElement.classList.remove(
                                    "nav-open",
                                );
                            });
                        });
                        bindNavButtonClick = true;
                    }
                }
            }
        });
    });
    htmlElementObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
    });
}
let bindNavButtonClick = false;
let originalCreateElement;
if (!originalCreateElement) {
    originalCreateElement = document.createElement;
}
document.createElement = function (tagName) {
    const element = originalCreateElement.call(document, tagName);
    if (tagName.toLowerCase() === "a") {
        const originalDownloadDescriptor = Object.getOwnPropertyDescriptor(
            HTMLAnchorElement.prototype,
            "download",
        );
        Object.defineProperty(element, "download", {
            set: function (value) {
                if (this.href && this.href.startsWith("blob:")) {
                    // console.log(value);
                    // console.log(this.href);
                    processBlobURL(this.href, value).catch((error) => {
                        console.error("处理Blob URL时出错:", error);
                    });
                }
                if (
                    originalDownloadDescriptor &&
                    originalDownloadDescriptor.set
                ) {
                    originalDownloadDescriptor.set.call(this, value);
                }
            },
            get: originalDownloadDescriptor
                ? originalDownloadDescriptor.get
                : void 0,
        });
    }
    return element;
};
async function processBlobURL(blobUrl, filename) {
    try {
        const response = await fetch(blobUrl);
        const blob = await response.blob();
        const chunkSize = 10 * 1024 * 1024;
        if (blob.size > chunkSize) {
            const chunks = Math.ceil(blob.size / chunkSize);
            const fileId = Date.now().toString();
            for (let i = 0; i < chunks; i++) {
                const start = i * chunkSize;
                const end = Math.min(start + chunkSize, blob.size);
                const chunk = blob.slice(start, end);
                const base64Chunk = await blobToBase64(chunk);
                webkitCallback.sendFile({
                    type: blob.type,
                    size: blob.size,
                    filename,
                    data: base64Chunk,
                    fileId,
                    chunkIndex: i,
                    totalChunks: chunks,
                });
            }
        } else {
            const base64Data = await blobToBase64(blob);
            webkitCallback.sendFile({
                type: blob.type,
                size: blob.size,
                filename,
                data: base64Data,
            });
        }
    } catch (error) {
        console.error("处理Blob URL时出错:", error);
    }
}
async function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result.split(",")[1];
            resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}
function emitClickTab(tab) {
    if (typeof tab !== "number") return;
    if (tab <= 0 || tab > 4) return;
    const tabDom = document.querySelector(
        `#app > div > div > div > div.two._aigs > header > div > div > div > div > span > div > div:nth-child(1) > div:nth-child(${tab}) > div`,
    );
    if (tabDom && tabDom.click) {
        tabDom.click();
    }
}
window.emitClickTab = emitClickTab;
function clearHoverClassName() {
    const hoverTrigger = document.querySelectorAll("._ak72");
    hoverTrigger.forEach((evt) => {
        evt.className = "_ak72";
    });
    const gridCells = document.querySelectorAll(
        '._ak72 ._ak8i[role="gridcell"] span:nth-child(3)',
    );
    gridCells.forEach((evt) => {
        evt.style = "display: none;";
    });
}
function clickSendMessageBtn(event) {
    const lockSendMessage = getIsChatLimited();
    if (lockSendMessage) {
        event.stopPropagation();
        webkitCallback.chatLimitedCallback();
    } else {
        webkitCallback.sendMessageCallback(globalData.currentChatId);
    }
}
function bindSendMessageEvent(dom) {
    if (dom) {
        dom.removeEventListener("click", clickSendMessageBtn);
        dom.addEventListener("click", clickSendMessageBtn);
    }
    return;
}
function addSendBtnListener() {
    const button = document.querySelector(
        "#main > footer > div.x1n2onr6.xhtitgo.x9f619.x78zum5.x1q0g3np.xuk3077.xjbqb8w.x1wiwyrm.xquzyny.xvc5jky.x11t971q.xnpuxes.copyable-area > div > span > div > div > div > div.x9f619.x78zum5.x6s0dn4.xl56j7k.xpvyfi4.x2lah0s.x1c4vz4f.x1fns5xo.x1ba4aug.x1c9tyrk.xeusxvb.x1pahc9y.x1ertn4p.x1pse0pq.xpcyujq.xfn3atn.x1ypdohk.x1m2oepg > div > span > button",
    );
    if (button) {
        bindSendMessageEvent(button);
    }
    const betaButton = document.querySelector(
        "#main > footer > div.x1n2onr6.xhtitgo.x9f619.x78zum5.x1q0g3np.xuk3077.xjbqb8w.x1wiwyrm.xquzyny.xvc5jky.x11t971q.xnpuxes.copyable-area > div > span > div > div > div > div.x9f619.x78zum5.x6s0dn4.xl56j7k.xpvyfi4.x2lah0s.x1c4vz4f.x1fns5xo.x1ba4aug.x1c9tyrk.xeusxvb.x1pahc9y.x1ertn4p.x1pse0pq.xpcyujq.xfn3atn.x1ypdohk.x1m2oepg > button",
    );
    if (betaButton) {
        bindSendMessageEvent(betaButton);
    }
}
function inputListenerFunc(event) {
    const lockSendMessage = getIsChatLimited();
    if (lockSendMessage) {
        event.stopPropagation();
        event.preventDefault();
        webkitCallback.chatLimitedCallback();
    } else {
        if (event.key === "Enter" && this.innerText != "") {
            webkitCallback.sendMessageCallback(globalData.currentChatId);
        }
    }
}
function bindInputListener(dom) {
    if (dom) {
        dom.removeEventListener("keydown", inputListenerFunc);
        dom.addEventListener("keydown", inputListenerFunc);
    }
    return;
}
function addInputListener() {
    const inputDom = document.querySelector(
        `footer .lexical-rich-text-input>.x1hx0egp.x6ikm8r.x1odjw0f.x1k6rcq7.x6prxxf`,
    );
    if (inputDom) {
        bindInputListener(inputDom);
    }
}
function addBackBtn() {
    // console.log(2);
    const oldBackBtn = document.getElementById("backBtn");
    if (oldBackBtn) return;
    function appendChild(avatar2) {
        const avatarParent = avatar2.parentNode;
        if (avatarParent) {
            const newNode = document.createElement("div");
            newNode.innerHTML =
                '<svg t="1658371755384" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="https://www.w3.org/2000/svg" p-id="2324" width="32" height="32"><path d="M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872l-318.016 318.048 318.016 318.016c18.752 18.752 18.752 49.12 0 67.872C696.544 907.328 684.256 912 671.968 912z" p-id="2325" fill="#58656e"></path></svg>';
            newNode.id = "backBtn";
            newNode.addEventListener(
                "click",
                function () {
                    globalData.isMessageOpen = false;
                    const contactPanel = document.querySelector(".two._aigs");
                    if (contactPanel) {
                        const targetClassName = contactPanel.className.replace(
                            "is-message-open",
                            "",
                        );
                        contactPanel.className = targetClassName;
                    }
                    clearHoverClassName();
                    webkitCallback.exitChatCallback(globalData.currentChatId);
                    globalData.currentChatId = "";
                    hideWABanner();
                },
                false,
            );
            avatarParent.insertBefore(newNode, avatar2);
        }
    }
    const avatar = document.querySelector(
        "#main > header .x1c4vz4f.x2lah0s.xdl72j9.x1cbfl22.x1y332i5",
    );
    if (avatar) {
        appendChild(avatar);
    } else {
        // console.log("兼容旧版本avatar");
        const legacyAvatar = document.querySelector(
            "#main > header .x1c4vz4f.x2lah0s.xdl72j9.x1i4ejaq.x1y332i5",
        );
        if (legacyAvatar) {
            appendChild(legacyAvatar);
        } else {
            // console.log("找不到用户头像图标元素");
        }
    }
}
function addSearchBtnListener() {
    const searchIcon = document.querySelector('span[data-icon="search-alt"]');
    if (searchIcon) {
        const searchBtn = searchIcon.parentNode;
        if (searchBtn) {
            searchBtn.style.display = "none";
        }
    }
}
function doneAfterContactListComplete() {
    let contactItems = document.querySelectorAll(
        "#pane-side .x10l6tqk.xh8yej3.x1g42fcv",
    );
    clearHoverClassName();
    let index = 0;
    for (let item of contactItems) {
        if (currentTabIndex === 3 && index === 0) {
            continue;
        }
        item.onclick = function (event) {
            const chatId = event.currentTarget
                ? event.currentTarget.querySelector(
                      ".x1iyjqo2.x6ikm8r.x10wlt62.x1n2onr6.xlyipyv.xuxw1ft.x1rg5ohu._ao3e",
                  )
                : null;
            globalData.currentChatId = chatId ? chatId.innerText : "";
            webkitCallback.enterChatCallback(globalData.currentChatId);
            const downSpanBtn = document.querySelector(
                'span[data-testid="down"]',
            );
            if (downSpanBtn == event.target) {
                return;
            }
            const contactPanel = document.querySelector("._aigs");
            const common =
                "x1n2onr6 x13vifvy x17qophe x78zum5 xh8yej3 x5yr21d x6ikm8r x10wlt62 x1iek97a x1w3jsh0 xf8xn22 x168nmei x13lgxp2 x5pf9jr xo71vjh x1g0ag68 xcgwb2z x4afe7t x1alahoq x1j6awrg x1m1drc7 x1n449xj x162n7g1 xitxdhh x134s4mn x1s928wv x1setqd9";
            if (contactPanel) {
                globalData.isMessageOpen = !globalData.isMessageOpen;
                contactPanel.className = globalData.isMessageOpen
                    ? "_aigs two is-message-open " + common
                    : "_aigs two " + common;
            }
        };
        index++;
    }
}
function doneAfterArchivingContactListComplete(target, retryTime = 0) {
    // console.log("doneAfterArchivingContactListComplete");
    if (retryTime === 10) {
        // console.error(
        //     "[doneAfterArchivingContactListComplete]: 超过归档重试次数" +
        //         retryTime,
        // );
        return;
    }
    if (!target) {
        console.error("[doneAfterArchivingContactListComplete]: target未找到");
        return;
    }
    let contactItems = target.querySelectorAll(".x10l6tqk.xh8yej3.x1g42fcv");
    if (contactItems.length === 0) {
        setTimeout(() => {
            doneAfterArchivingContactListComplete(target, ++retryTime);
        }, 200);
    } else {
        clearHoverClassName();
        let index = 0;
        for (let item of contactItems) {
            if (currentTabIndex === 3 && index === 0) {
                continue;
            }
            item.onclick = function (event) {
                const downSpanBtn = document.querySelector(
                    'span[data-testid="down"]',
                );
                if (downSpanBtn == event.target) {
                    return;
                }
                const contactPanel = document.querySelector("._aigs");
                const common =
                    "x1n2onr6 x13vifvy x17qophe x78zum5 xh8yej3 x5yr21d x6ikm8r x10wlt62 x1iek97a x1w3jsh0 xf8xn22 x168nmei x13lgxp2 x5pf9jr xo71vjh x1g0ag68 xcgwb2z x4afe7t x1alahoq x1j6awrg x1m1drc7 x1n449xj x162n7g1 xitxdhh x134s4mn x1s928wv x1setqd9";
                if (contactPanel) {
                    globalData.isMessageOpen = !globalData.isMessageOpen;
                    contactPanel.className = globalData.isMessageOpen
                        ? "_aigs two is-message-open " + common
                        : "_aigs two " + common;
                }
            };
            index++;
        }
    }
}
function stopMove(e) {
    const paneListNode = document.querySelector("#pane-side");
    const chatNode = document.querySelector(
        "#main > div.x1n2onr6.x1vjfegm.x1cqoux5.x14yy4lh > div > div.x10l6tqk.x13vifvy.x1o0tod.xyw6214.x9f619.x78zum5.xdt5ytf.xh8yej3.x5yr21d.x6ikm8r.x1rife3k.xjbqb8w.x1ewm37j",
    );
    if (paneListNode?.contains(e.target) || chatNode?.contains(e.target)) {
        return;
    }
    e.preventDefault();
}
let keyboardOpenedScrollTop = 0;
function scrollChatList() {
    const chatList = document.querySelector("._ajyl");
    keyboardOpenedScrollTop = chatList.scrollTop;
    // console.log("keyboardOpenedScrollTop", keyboardOpenedScrollTop);
}
function watchKeyboard() {
    let flag = false;
    let keyboardOpenedTop = 0;
    window.visualViewport.onscroll = function () {
        const originHeight = document.documentElement.offsetHeight;
        const viewport = window.visualViewport;
        const height = viewport.height;
        const top = viewport.pageTop;
        if (height < originHeight) {
            if (flag) {
                return;
            }
            flag = true;
            const chatList = document.querySelector("._ajyl");
            let scrollTop = null;
            if (chatList) {
                scrollTop = chatList.scrollTop;
            }
            document.body.style.height = height + "px";
            document.getElementById("app").style.height = height + "px";
            document.getElementById("app").style.top = top + "px";
            if (chatList && scrollTop) {
                keyboardOpenedTop = top;
                chatList.scrollTo(0, top + scrollTop);
                chatList.addEventListener("scroll", scrollChatList);
            }
            document.addEventListener("touchmove", stopMove, {
                passive: false,
            });
        } else {
            flag = false;
            const chatList = document.querySelector("._ajyl");
            document.body.style.height = "100%";
            document.getElementById("app").style.height = "100%";
            document.getElementById("app").style.top = 0;
            if (chatList) {
                chatList.scrollTo(
                    0,
                    keyboardOpenedScrollTop - keyboardOpenedTop,
                );
                keyboardOpenedTop = 0;
                chatList.removeEventListener("scroll", scrollChatList);
            }
            document.removeEventListener("touchmove", stopMove);
        }
    };
}
// console.log("document.readyState", document.readyState);
let isRegister = false;
if (document.readyState === "loading" && !isRegister) {
    window.addEventListener("DOMContentLoaded", () => {
        // console.log("DOMContentLoaded");
        mainMutation();
    });
    isRegister = true;
}
if (document.readyState === "interactive" && !isRegister) {
    // console.log("DOMContentLoaded");
    mainMutation();
    isRegister = true;
}
function createProperty(value) {
    var _value = value;
    function _get() {
        return _value;
    }
    function _set(v) {
        _value = v;
    }
    return { get: _get, set: _set };
}
function makePropertyWritable(objBase, objScopeName, propName, initValue) {
    let newProp, initObj;
    if (
        objBase &&
        objScopeName in objBase &&
        propName in objBase[objScopeName]
    ) {
        if (typeof initValue === "undefined") {
            initValue = objBase[objScopeName][propName];
        }
        newProp = createProperty(initValue);
        try {
            Object.defineProperty(objBase[objScopeName], propName, newProp);
        } catch (e) {
            initObj = {};
            initObj[propName] = newProp;
            try {
                objBase[objScopeName] = Object.create(
                    objBase[objScopeName],
                    initObj,
                );
            } catch (e2) {
                console.error(e2);
            }
        }
    }
}
function hideWABanner() {
    const grandParent = document.querySelector('[data-icon="wa-square-icon"]')
        ?.parentElement?.parentElement;
    if (grandParent) {
        grandParent.style.display = "none";
    }
}
window.onload = function () {
    insertMetaTag();
    insertStyleTag();
    insertDir();
    // console.log("isIpadOS", globalData.isIpadOS);
    if (globalData.isIpadOS) {
        document.documentElement.setAttribute("device", "ipad");
    }
    // console.log("document.readyState", document.readyState);
    if (!globalData.isIpadOS) {
        let listenWindowScroll = function () {
            let fixedChatHeader = document.querySelector("#main > header");
            if (fixedChatHeader) {
                fixedChatHeader.style.top = `${viewport.pageTop}px`;
            }
        };
        const viewport = window.visualViewport;
        viewport.onscroll = function () {
            listenWindowScroll();
        };
    } else {
        watchKeyboard();
    }
};
