var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    "pool" : true,
    maxMessages: "1000",
    maxConnections: "20",
    auth: {
        user: 'your email',
        pass: 'your password'
    }
});

var emails =[
    'wellnhofer@aevum.de',
    'ivo@wax.be',
    'peterbodnar@peterbodnar.com',
    'm.goleb@gmail.com',
    'benedikt.meurer@googlemail.com',
    'info@greenstorm.ru',
    'martin.sandsmark@kde.org',
    'lewinski@kace.com',
    'fersarr@gmail.com',
    'yuhei.yasuda1003@gmail.com',
    'andreas@nibbli.com',
    'webyom@gmail.com',
    'valentin.steinwandter@exputec.com',
    'caziel@gmx.net',
    'weaverryan+github@gmail.com',
    'dev@xiaoru.li',
    'nemoneph@gmail.com',
    'gperlman27@gmail.com',
    'jsnmoon@me.com',
    'jason.spidle@gmail.com',
    'hashimoto.stream@gmail.com',
    'pavlenko@technocom.tech',
    'ollebostr@gmail.com',
    'jean-gui@w3.org',
    'kamil.madejski@ez.no',
    'ganego@sogetthis.com',
    'info@guite.de',
    'ptb@ioutime.com',
    'thinktanmay@gmail.com',
    'kjj10@163.com',
    'jtraverso@dext.es',
    'prismiwi@gmail.com',
    'mail@janmarek.net',
    'leon.lafa@gmail.com',
    'tim@amicalement-web.net',
    'julien.bonnin@liwio.com',
    'shem.leong@thecarousell.com',
    'bel3atar@aol.com',
    'DmA8751482@outlook.com',
    'robert@theguys.sh',
    'alex.carol.c@gmail.com',
    'teo.dragovic@gmail.com',
    'ruudk@mphuis.com',
    'guerin_guillaume@hotmail.fr',
    'mixia@google.com',
    'julien.marrec@gmail.com',
    'osmanungur@gmail.com',
    'danieldudzic@gmail.com',
    'serkan.yildiz@phpro.be',
    'contact@corne.info',
    'anthony@bigbigmoose.com',
    'abhijeet.krishnan@gmail.com',
    'dvanbrunt@gmail.com',
    'adam.paul.martinez@gmail.com',
    'julien.montel@mgel.fr',
    'emtholin@gmail.com',
    'jaqb@sekta.pl',
    'kamen.stanev@automattic.com',
    'anton_ch1989@mail.ru',
    'hlias.nop@gmail.com',
    'tamas.nagy@balabit.com',
    'git.huntrr@gmail.com',
    'email2vimalraj@gmail.com',
    'roumen@dawebs.com',
    'github@felixrupp.com',
    'yulongh@insight.io',
    'dave.hirschfeld@gmail.com',
    'johntuckerusa@gmail.com',
    '7018407@gmail.com',
    'ben.woosley@gmail.com',
    'git@skratchdot.com',
    'thisrandomperson666@gmail.com',
    'anna.yakusevich@icloud.com',
    'me@giladronat.com',
    'm.roei.raz@gmail.com',
    'mwsaz@zcorrecteurs.fr',
    'roger@alliancerealtynetwork.com',
    'andy91818@hotmail.com',
    'vilsafur@gmail.com',
    'noah@tyes.us',
    'dexter_180@live.com',
    'Skiedrake@316c924e-a436-60f5-8080-3fe189b3f50e',
    'nyanpasugit@gmail.com',
    'jorn_fiks@hotmail.com',
    'dev+github@edouard-lopez.com',
    'mrdotjim@gmail.com',
    'kylermichel@gmail.com',
    'kevingrandon@yahoo.com',
    'victor@victor.com.au',
    'ceottaki@gmail.com',
    'michael.williams@funsational.com',
    'phansys@gmail.com',
    'youssef.benhssaein.ext@orange.com',
    'prkinformed@gmail.com',
    'mtrbean@github.fake',
    'daniel@zuster.org',
    'warlordsa148@gmail.com',
    'barfitzgerald@gmail.com',
    'christian.schulze@gmail.com',
    'sebastian@calyptus.eu',
    'navreet@acrospire.technology',
    'alexander.c.booth@gmail.com',
    'github@camro.net',
    'tim.roes@elastic.co',
    'me@chrishein.com',
    'bpolaszek@gmail.com',
    'prashant.andani@gmail.com',
    'pcottle@fb.com',
    'lajarige.guillaume@free.fr',
    'mkchoi212@icloud.com',
    'ematejska@Ewas-MacBook-Pro.local',
    'tomek.sut@gmail.com',
    'davidc.luhr@gmail.com',
    'markopraakli@gmail.com',
    'todd@automattic.com',
    'kjpizzey@gmail.com',
    'jordwest@gmail.com',
    'stephen9357@gmail.com',
    'aswin.p1800@gmail.com',
    'danilowoz@gmail.com',
    'mathews.kyle+gatsbybot@gmail.com',
    'sergeysolonko@gmail.com',
    'gusachenkogleb@gmail.com',
    'brad.griffith@automattic.com',
    'johnthexiii@gmail.com',
    'david.zuelke@bitextender.com',
    'westphal@secure-net-concepts.de',
    'viralganatra16@gmail.com',
    'rametta@outlook.com',
    'kshedden@umich.edu',
    'strahek@gmail.com',
    'hazru.anurag@gmail.com',
    'jessica.lord@github.com',
    'peter@parashift.com.au',
    'raineroviir@rainers-MacBook-Pro.local',
    'gouravsood@gmail.com',
    'peiche@gmail.com',
    'floydsoft@gmail.com',
    'james@ddxor.com',
    'maxwchang@gmail.com',
    'webmastertux1@gmail.com',
    'annalisa.adv@gmail.com',
    'mightydeveloper@gmail.com',
    'vadim.shabanov@gmail.com',
    'jdesrosi@gmail.com',
    'rochagza@gmail.com',
    'simshaun@gmail.com',
    'havoc42@gmail.com',
    'devin.coughlin@gmail.com',
    'varunrau@gmail.com',
    'pedrobelo@gmail.com',
    'karl@weilstreet.com',
    'lorsignol@gmail.com',
    'dhruvikn@gmail.com',
    'grummfy@gmail.com',
    'benreeve99@yahoo.co.uk',
    'jagtap.vishal30@gmail.com',
    'johim9493@gmail.com',
    'christopher.hadley@gmail.com',
    'wwjd2@web.de',
    'adel.mehrban@gmail.com',
    'slavo@kundrik.com',
    'ogiaquino@gmail.com',
    'sebastian.doell@libasys.de',
    'ar@adamrichman.com',
    'to.benzi@gmail.com',
    'zihongz@google.com',
    'ravisantoshgudimetla@gmail.com',
    'thomas.h.chia@googlemail.com',
    'kiarash.zar@gmail.com',
    'sota.yamashita@gmail.com',
    'lukaszos@google.com',
    'robin@grumpycorp.com',
    'peterjohnmcfarlane@gmail.com',
    'j.mingov@3boll.com',
    'xianglin.gxl@alibaba-inc.com',
    'selasley@Lappy486.local',
    'belco90@gmail.com',
    'lo+github@znerol.ch',
    'ops991923@gmail.com',
    'g123456789l@gmail.com',
    'stephanloyd9@gmail.com',
    'lanza@fb.com',
    'haruta@kyokutyo.com',
    'christopher@nycode.co',
    'yoshuawuyts@gmail.com',
    'agartland@gmail.com',
    'dsk@google.com',
    'awz.ang@gmail.com',
    'andrei@flashsoft.eu',
    'emii.17@hotmail.com',
    'febesbrasil@gmail.com',
    'shafqat.dulal@gmail.com',
    'bussonniermatthias@gmail.com',
    'mafields@ncsu.edu',
    'rfbayliss@gmail.com',
    'joel.nothman@gmail.com',
    'federicobond@gmail.com',
    'ahmed.tailouloute@capgemini.com',
    'chharris@linkedin.com',
    'hiroyuki.vincent.yamazaki@gmail.com',
    'christian.schnidrig@switch.ch',
    'elforastero@ya.ru',
    'tomas.kmieliauskas@fintem.lt',
    'micw@umich.edu',
    'griffinmichl@gmail.com',
    'jrh.mjr@gmail.com',
    'liggitt@google.com',
    'm.schophaus@adcada.de',
    'sbaker@scottlogic.co.uk',
    'aniketuttam11@gmail.com',
    'lefpsi@gmail.com',
    'benjamin.pasero@gmail.com',
    'pajachiet@protonmail.com',
    'luma.chroma@gmail.com',
    'ondrej.machulda@gmail.com',
    'oussama.elgoumri@insight-hq.co',
    'kevans91@ksu.edu',
    'mattwondra@gmail.com',
    'raz@automattic.com',
    'anirudh@foxish.me',
    'manavm@visionwebsoft.com',
    'alex@gyoshev.net',
    'gfc714@gmail.com',
    'aye@ess.ucla.edu',
    'kylebarron2@gmail.com',
    '1753177225@qq.com',
    'david.calavera@gmail.com',
    'avirzajac@gmail.com',
    'jacob@bandes-storch.net',
    'alejandrohohmann@gmail.com',
    'graham@alt-three.com',
    'joel.auterson@googlemail.com',
    'nmd.matt@gmail.com',
    'tzinckgraf@gmail.com',
    'philc@microsoft.com',
    'david.joos@gmail.com',
    'matti.picus@gmail.com',
    'hww@google.com',
    'cbravo@klick.com',
    'owncloud@sradonia.net',
    'tomasz.gl69@gmail.com',
    'jerome@nadaud.io',
    'firefishie@gmail.com',
    'alexpavel123@gmail.com',
    'flavian.sierk@1up.io',
    'simon@simonswiss.com',
    'aaronjcaldwell@gmail.com',
    'narcuri1@gmail.com',
    'davidgraycn@gmail.com',
    'matthieu.bontemps@knplabs.com',
    'rob.felty@automattic.com',
    'magnar@myrtveit.com',
    'alblue@apple.com',
    'richardneitzke.rn@gmail.com',
    'vkramskikh@gmail.com',
    'regularjack@gmail.com',
    'sonny@fastmail.net',
    'allendav@automattic.com',
    'BrianWignall@gmail.com',
    'theo.fidry@gmail.com',
    'lootcher@gmail.com',
    'pulzarraider2@gmail.com',
    'rodrigo.iloro@gmail.com',
    'var.mantas@gmail.com',
    'rjmccall@apple.com',
    'code@timmcnamara.co.nz',
    'hi.laow@gmail.com',
    'malone@fxhome.com',
    'github@higher.lv',
    'maesh.kyryll@gmail.com',
    'stas.soroka@gmail.com',
    'stephane.martin@vesperal.eu',
    'tomaszk1@hotmail.co.uk',
    'davg@google.com',
    'naresh.archfirst@gmail.com',
    'probe1215@gmail.com',
    'cacolorde@gmail.com',
    'rudolf.ratusinski@gmail.com',
    'jeremy@lewi.us',
    'maxime@quandalle.com',
    'georgej1088@gmail.com',
    'andrija.vucinic@gmail.com',
    '814172254@qq.com',
    'hong.rich@gmail.com',
    'ricard.clau@gmail.com',
    'jk@jklib.org',
    'ruphin@ruphin.net',
    'alex.shaw.as@gmail.com',
    'luke@dlukeomalley.com',
    'ajiteshjs@gmail.com',
    'jlnkuhlmann@gmail.com',
    'kwangsan@gmail.com',
    'JamesMikeDuPont@gmail.com',
    'jiang.7369@163.com',
    'pgrifel@gmail.com',
    'scribeklio@gmail.com',
    'jose5918@gmail.com',
    'cjlynch@smcm.edu',
    'igor@angularjs.org',
    'mryeti97@gmail.com',
    'baileyc@uk.ibm.com',
    'peter.ward@reiss.com',
    'meghanavgupta@gmail.com',
    'nanda.harishankar@gmail.com',
    'ivan@ludios.org',
    'athul8720@gmail.com',
    'cazzindavide@gmail.com',
    'dkarlovi@gmail.com',
    'quentin.t@gmail.com',
    'philipp.eichhorn@bitdroid.de',
    'james@clickteam.com',
    'christophe.meneses@gmail.com',
    'sachira@live.com',
    'mcuadros@gmail.com',
    'vadim.borodavko@gmail.com',
    'josepvidalvidal@gmail.com',
    'michielfmstock@gmail.com',
    'panyang06231989@gmail.com',
    'jgilli@fastmail.fm',
    'jordan@chargifi.com',
    'dominic.tubach@to.com',
    'luca.bogdan@gmail.com',
    'strangehill@antarg.co',
    'sjw@gmx.ch',
    'mikeffrancis@gmail.com',
    'iblis@hs.ntnu.edu.tw',
    'mlazovla@gmail.com',
    'sanjay.rohit2@gmail.com',
    'azeta351@gmail.com',
    'julie@koubova.net',
    'shiranka.miskin@gmail.com',
    'oliver@8fit.com',
    'arturo@skydio.com',
    'owen@squibner.com',
    'greysteil@gmail.com',
    'ericgfwong@hotmail.com@316c924e-a436-60f5-8080-3fe189b3f50e',
    'iam.asm89@gmail.com',
    'chupman@us.ibm.com',
    'jorisvandenbossche@gmail.com',
    '1119186082@qq.com',
    'bmoscon@gmail.com',
    'maximenory@yahoo.fr',
    'idontknowwhattoputt@gmail.com',
    'onevcat@gmail.com',
    'wertha@gmail.com',
    'motou77@gmail.com',
    'ashura@protonmail.ch',
    'connor@connor.hu',
    'pbreach@uwo.ca',
    'buchholz.bastian@googlemail.com',
    'jjy920517@gmail.com',
    'linzichunzf@hotmail.com',
    'arco.bast@yahoo.de',
    'aurelijus@astdev.lt',
    'anthonyryan1@gmail.com',
    'jriddell@ubuntu.com',
    'aypetrov@mail.ru',
    'adityaprasad9032@gmail.com',
    'jeremgraph@gmail.com',
    'gunmetal313@gmail.com',
    'saransh@wisdomgeek.com',
    'me@nagarjun.co',
    'dongmeng.ldm@alibaba-inc.com',
    'liuggio@gmail.com',
    'disobolev@icloud.com',
    'luther.j@apple.com',
    'paul.hanaoka@liferay.com',
    'michalzuber86@gmail.com',
    'plusb21@gmail.com',
    'peter.westwood+github@ftwr.co.uk',
    'jack.francis@microsoft.com',
    'matt@setfive.com',
    'neilkimmett@gmail.com',
    'marcosdsanchez@gmail.com',
    'juan@juansoto.me',
    'juturu@live.com',
    'graham.batty@apple.com',
    'hiedema@hostnet.nl',
    'aaron.critchley@gmail.com',
    'xynxnx@gmail.com',
    'dvrenterghem@ibuildings.nl',
    'malik.browne3@gmail.com',
    'westi@automattic.com',
    'shuhei.kagawa@gmail.com',
    'tiraeth@gmail.com',
    'matthias@krauser.eu',
    'edreed@microsoft.com',
    'alirezasalehizadeh@hotmail.com',
    'sterrien@gmail.com',
    'panossk2@gmail.com',
    'sagarnasit@gmail.com',
    'leonesfield+github@gmail.com',
    'fabian@schaper.li',
    'palex@farpost.com',
    'wgorczyca@pgs-soft.com',
    'joannachen.x@gmail.com',
    'jnosh+git@jnosh.com',
    'ondrej.exner@ubnt.com',
    'deminoth+github@gmail.com',
    'xyao201@qq.com',
    'joeheinemeyer@gmail.com@316c924e-a436-60f5-8080-3fe189b3f50e',
    'sungmkim80@gmail.com',
    'samt@samt.st',
    'buczek@molgen.mpg.de',
    'vincent.ning93@gmail.com',
    'mail@djm.org.uk',
    'liuhoug@cn.ibm.com',
    'cameron.manavian@gmail.com',
    'bob.wall@ironcorelabs.com',
    'tom@tomduncalf.com',
    'kalpakas.g@gmail.com',
    'matthew@mjdsystems.ca',
    'pavel@campr.cz',
    'bertrand.zuchuat@gmail.com',
    'git@avelo.tech',
    'cnelson@cnelson.org',
    'tengkuhafidz@gmail.com',
    'dan.speckhard.pasque@automattic.com',
    'btford@umich.edu',
    'kyle@dontkry.com',
    'jubeki99@gmail.com',
    'adam@fransvilhelm.com',
    'charles@sarraz.in',
    'aaron.caldwell@elastic.co',
    'hawk.dvp@gmail.com',
    'jasonnoahchoi@gmail.com',
    'sieve32@gmail.com@316c924e-a436-60f5-8080-3fe189b3f50e',
    'shergin@fb.com',
    'alimcmaster1@gmail.com',
    'sagarhani33@gmail.com',
    'ymb002@bucknell.edu',
    'a@rodrigoramirez.com',
    'andriy.pyvovarchuk@techmagic.co',
    'contact@alanpoulain.eu',
    'github@corycross.org',
    'seppleviathan@gmx.de',
    'nicholas.l.sarlo@gmail.com',
    'domenicoleoneluciani@gmail.com',
    'BigFunger@gmail.com',
    'basnijholt@gmail.com',
    'me@kgajera.com',
    'ksschumy@amazon.com',
    'viacheslavmarchishin@192-168-11-206.office.flops.ru',
    'rolwinmonteiro@gmail.com',
    'chat@arabcoders.org',
    'jan@ntr.io',
    'samir.musali@gmail.com',
    'vitoriahmc@al.insper.edu.br',
    'christoph.paulik@geo.tuwien.ac.at',
    'ckerr@github.com',
    'eli_friedman@apple.com',
    'undrdog@yandex.ru',
    'git@trakos.pl',
    'jaboyd@redhat.com',
    'andymaheshw@gmail.com',
    'rich.sage@gmail.com',
    'gorisanson@gmail.com',
    'git@marco.zone',
    'me@marcelofabri.com',
    'tsirlucas@gmail.com',
    'hnv1308@gmail.com',
    'bogdan.rancichi@gmail.com',
    'olaf.a.minkowicz@gmail.com',
    'hmachlovi@gmail.com',
    'rafael.lopesdantas@hotmail.com',
    'garretthughes3@gmail.com',
    'henry.kleynhans@gmail.com',
    'noemi.salaun@gmail.com',
    'alk1m.wow@gmail.com',
    'contribute@tensortable.com',
    'chris@chriscressman.com',
    'marander@protonmail.com',
    'tanmay1618@gmail.com',
    'mbargar@gmail.com',
    'cameronmaske@gmail.com',
    'chicken_face@ymail.com',
    'g.gubarev63@gmail.com',
    'admin@cainari.info',
    'vlad@st6.io',
    'HsuanGM@gmail.com',
    'michael@estsurinter.net',
    'erik.david.nelson@gmail.com',
    'conor@honeycombcreative.com',
    'alexjm@umich.edu',
    'JamesThomason@QuickenLoans.com',
    'tuan.d.tran@hotmail.com',
    'Marco.Farrugia@Twosigma.com',
    'reinier@ibuildings.nl',
    'azelenskiy@fb.com',
    'adrcunha@google.com',
    'ollie@sabbaticalsoul.co.uk',
    'd.gieselaar@gmail.com',
    'tejas.pathak357@gmail.com',
    'r.lukesch@gmx.net',
    'github@qslw.com',
    'ahmad.elbardan@sensiolabs.de',
    'michael@van-engelshoven.de',
    'leonardo.giacone@gmail.com',
    'andreaslindpetersen@gmail.com',
    'springuper@gmail.com',
    'michelle@khanacademy.org',
    'nate@whistle.com',
    'gmoskovicz@gmail.com',
    'chrisdavis@outlook.com',
    'ben@reload.me.uk',
    'ronnyherc@gmail.com',
    'junchen.cq@gmail.com',
    'sorien@mail.com',
    'brianhartz@gmail.com',
    'eng.meligy@gmail.com',
    'mahieuloic@gmail.com',
    'me@iraghu.com',
    'esaulov.andrey@gmail.com',
    'rik.de.kort@pggm.nl',
    'vasu.mahesh@hotmail.com',
    'ananyaneogi11@gmail.com',
    'bourigaultfabien@gmail.com',
    'scottwater@gmail.com',
    'johtani@gmail.com',
    'eswordthecat@tfwno.gf',
    'jandrewstre@gmail.com',
    'drrowtree@gmail.com',
    'luis@tacon.eu',
    'alexander.deruwe@gmail.com',
    'laury.bueno@gmail.com',
    'liz@heptio.com',
    'jeren.browning@gmail.com',
    'patrick@reimers.me',
    'henry@blooob.me',
    'sh@signalwerk.ch',
    'eric.douglas.mail@gmail.com',
    'yurick.hauschild@gmail.com',
    'heyuangunia@gmail.com',
    'iamamitoj@gmail.com',
    'edward.crompton@gmail.com',
    'ojeytonwilliams@gmail.com',
    'ali.salah.sheikh@gmail.com',
    'el1topa@gmail.com',
    'mankoff@gmail.com',
    'philippe.degeeter@carboatmedia.fr',
    'devthewild@gmail.com',
    'jackgeorgemarch@Gmail.com',
    'yonas.kassa@imdea.org',
    'kevin.auvinet@yousign.com',
    'atoth89@gmail.com',
    'kalessil@gmail.com',
    'saiii@live.de',
    'garance.rey@automattic.com',
    'greg606@gmail.com',
    'raito.akehanareru@gmail.com',
    'junaidilyas1@gmail.com',
    'ivergarakausel@gmail.com',
    'marko.andrijasevic@protonmail.com',
    'jk.simunic@gmail.com',
    'turkersezer@tsdesign.info',
    'Mr@georgee.co.uk',
    'Atso.Sariola@gmail.com@316c924e-a436-60f5-8080-3fe189b3f50e',
    'sakhat@gmail.com',
    'philip.cerles@gmail.com',
    'office@manuelwieser.com',
    'inconnent4@gmail.com',
    'brice@bmaron.net',
    'peter.schultz@classmarkets.com',
    'wizhippo@gmail.com',
    'antoine.herault@gmail.com',
    'micluc8@gmail.com',
    'bruno.wowk@upx.com',
    'gilden@planet.ee',
    'aquadestructor@icloud.com',
    'vixximpred@gmail.com',
    'devin@devinfoley.com',
    'khaledgarbaya@gmail.com',
    'Xenusicelon@316c924e-a436-60f5-8080-3fe189b3f50e',
    'fallen013@gmail.com',
    'Silencer.Web@gmail.com',
    'kai.dederichs@protonmail.com',
    'yangpa@google.com',
    'svivekkumar@vmware.com',
    'bonnotte@descartes',
    'antti16+github@kaihola.fi',
    'unk91nd@gmail.com',
    'rajaskakodkar16@gmail.com',
    'luoyonggang@gmail.com',
    'michel@weimerskirch.net',
    'thekevlau@gmail.com',
    'ahmad.mayahi@gmail.com',
    'shivamd001@gmail.com',
    'git@srcmake.com',
    'rodrigo.diez@netropy.es',
    'maisem@google.com',
    'jacklenox@fastmail.com',
    'eduar.mreyes@gmail.com',
    'mikolaj.dadela@hgv-online.de',
    'michele.orselli@gmail.com',
    'sendhilp@gmail.com',
    'fd6130@git.com',
    'chiragmittal.mittal@gmail.com',
    'neil.craig@thedotproduct.org',
    'alex.alekseyev@twosigma.com',
    'kanemaxcysc@gmail.com',
    'mjihyung@gmail.com',
    'Uristqwerty@gmail.com',
    'jojoe187@gmail.com',
    'info@alsar.si',
    'kapajsaimir@gmail.com',
    'buringerst@vmware.com',
    'amustaque97@gmail.com',
    'wa17@mails.tsinghua.edu.cn',
    'harald@carecom.de',
    'rlanese@asu.edu',
    'suorees113@gmail.com',
    'cuvelierklaas@gmail.com',
    'pilot@pesochin.net',
    'maxime.doury@gmail.com',
    '932446461@qq.com',
    'max@semmle.com',
    'jeremy.massel@gmail.com',
    'cansrau@gmail.com',
    'hamed@erevalue.com',
    'nich.a.leary@gmail.com',
    'seth.lilly@gmail.com',
    'vojta.molda@gmail.com',
    'roshanjossey@gmail.com',
    'christian.liebel@thinktecture.com',
    'nathalier@gmail.com',
    'andrew@madebymutual.com',
    'laurandidi21@gmail.com',
    'georgii.gorbachev@elastic.co',
    'MaximAbramchuck@gmail.com',
    'andrew.stucki@elastic.co',
    'kent@doddsfamily.us',
    'adamwbagaskarta@gmail.com',
    'katsumeshi@gmail.com',
    'wos.mateusz16@gmail.com',
    'simast@gmail.com',
    'jan@sorgalla.com',
    'nbaosullivan@gmail.com',
    'keith.j.kraus@gmail.com',
    'khasan222@Gmail.com',
    'marc.morera@befactory.es',
    'micahjsmith@gmail.com',
    'arduanov@gmail.com',
    'jackkreft@gmail.com',
    'janus@insignificancegalore.net',
    'sonjamfrancis@gmail.com',
    'roland.hager@tu-berlin.de',
    'cecile@cecilelebleu.com',
    'vasilybagirov@gmail.com',
    'grachb@ya.ru',
    'zenyaku@free.fr',
    'adrien.emery@gmail.com',
    'karasinski@gmail.com',
    'jonathan@x3m.io',
    'bradr@Bradleys-MacBook-Pro-2.local',
    'delboy1978uk@gmail.com',
    'nicolas.assing@gmail.com',
    'daniel_simpson1988@hotmail.com',
    'umang.multidots@gmail.com',
    'alicancubukcuoglu@gmail.com',
    'ben@redfrontdoor.org',
    'tobi.riemenschneider@gmail.com',
    'ryan.lynn@protonmail.com',
    'noahfradin@gmail.com',
    'olexiy.markhovsky@gmail.com',
    'thomas.tuts@gmail.com',
    'ilija.tovilo@me.com',
    'alexey.volkov@ark-kun.com',
    'ide@fb.com',
    'AndrolGenhald@gmail.com',
    'hasan@armut.com',
    'm@nuelriel.com',
    'anuja@joshsoftware.com',
    'gabriel.corona@free.fr',
    'steve.hutchins@flubit.com',
    'pedroreys@gmail.com',
    'fabien@symfony.com',
    'cadekynaston@gmail.com',
    'pobrien@monetate.com',
    'sebastien.hamel@gmail.com',
    'xxin@groupon.com',
    'mikeumus@gmail.com',
    'tkolodziejski@gmail.com',
    'code@dnowak.pl',
    'donysukardi@gmail.com',
    'rishabh31121999@gmail.com',
    'benjamin.dos-santos@nadeo.com',
    'rpg600@gmail.com',
    'kaylyn.sigler@sendgrid.com',
    'mominul2082@gmail.com',
    'gray@webpushers.com',
    'mbeech@mark-beech.co.uk',
    'chase@chaseohlson.com',
    'michael.vhirsch@gmail.com',
    'nicoandrade@gmail.com',
    'codemansquest@gmail.com',
    'a.de.raaij@gmail.com',
    'ernadoo@gmail.com',
    'saadpasta70@gmail.com',
    'vasjaforutube@gmail.com',
    'web@matthagner.com',
    'einar.paul.qvale@gmail.com',
    'brittney.ball07@gmail.com',
    'kim.andrewsy@gmail.com',
    'bitdop@gmail.com',
    'vincentjames501@gmail.com',
    'doug@pixelgraphics.us',
    'davidweaverch@gmail.com',
    'kelly.murphy@elastic.co',
    'noritada.kobayashi@gmail.com',
    'tomozx8@gmai.com',
    'austin_moore@me.com',
    'pixelhandler@gmail.com',
    'zangli@google.com',
    'justin.lin@twosigma.com',
    'jorge.revuelta@bq.com',
    'tomi.takussaari@gmail.com',
    'jeff@rey.sc',
    'nhatminh_179@hotmail.com',
    'ases@tb-solutions.com',
    'gilles@antistatique.net',
    'james.seppi@gmail.com',
    'brianlheim@gmail.com',
    'register@shunyahagiwara.com',
    'lsj7000@gmail.com',
    'jinl@uber.com',
    'benjytrys@gmail.com',
    'foss@yclian.com',
    'epicyr@gmail.com',
    'abdulraufmujahid@gmail.com',
    'contra@wearefractal.com',
    'jprado@fb.com',
    'hugo@agbonon.fr',
    'merbinjanselm@gmail.com',
    'm.ovtsin@topface.com',
    'dwieeb@gmail.com',
    'marcus.tisater@gmail.com',
    'kall@kall.ws',
    'me@phillfarrugia.com',
    'benedikt@kulmann.biz',
    'newinh90@gmail.com',
    'plievone@cc.hut.fi',
    'sldesalobo@gmail.com',
    'olivier.grisel@ensta.org',
    'ilyes.kooli@elefant.ro',
    'kurtz.justin@gmail.com',
    'batisse.alexandre@gmail.com',
    'tighe.racicot@gmail.com',
    'rui.botto@eversports.com',
    'hunterluthi@316c924e-a436-60f5-8080-3fe189b3f50e',
    'hoshiko.tetsumoto@gmail.com',
    'mzolotukhin@apple.com',
    'gabriele.fisher@apple.com',
    'prasanthv@icloud.com',
    'matt.gawarecki@gmail.com',
    'kwasiamantin@gmail.com',
    '2ur1aqua@gmail.com',
    'franzejr@gmail.com',
    'lewtak@gmail.com',
    'hasnain2808@gmail.com',
    'michael.barz@zeitgestalten.eu',
    'juanpaulo.gutierrez@gmail.com',
    'tyler@tessellate.io',
    'fjdiod@gmail.com',
    'aliby.bbb@gmail.com',
    'karl.horky@gmail.com',
    'ahsan.ubitian@gmail.com',
    'alexanderjsx@gmail.com',
    'divyamrastogi2@gmail.com',
    'garvankeeley+github@gmail.com',
    'jb@ninja-squad.com',
    'alex.close@elastic.co',
    'scarrucciu@remedypartners.com',
    'ba0708@icloud.com',
    'alvis@hilbert.space',
    'jleahy@gmail.com',
    'nikhilduggirala95@gmail.com',
    'filiphosko@gmail.com',
    'tareef@fastmail.com',
    'unaudio@gmail.com',
    'philipp@programmingentrepreneur.com',
    'genuzioluca@gmail.com',
    'ummahusla@gmail.com',
    'hasannyaman@gmail.com',
    'peter@peterbrady.co.uk',
    'nervo@nervo.net',
    'gergely.orosz@gmail.com',
    'liudonghua123@gmail.com',
    'p-anand@mercari.com',
    'arjun@plangrid.com',
    'killesre@gmail.com',
    'roman.anasal@bdsu.de',
    'tegberts@gmail.com',
    'jjhelmus@gmail.com',
    'tarasovdyu@gmail.com',
    'indra.kusuma@tokopedia.com',
    'carshalash@gmail.com',
    'matias@insaurral.de',
    'aaa@bzfx.net',
    'github-mail@molenda.com',
    'bandonrandon@gmail.com',
    'saigowthamr@gmail.com',
    'jjasghar@gmail.com',
    'scott777@tpg.com.au',
    'DarkTechnomancer2@gmail.com',
    'daniele.cesarini@gmail.com',
    'jdsalingerjr@gmail.com',
    'hassan.motivala@Gmail.com',
    'karlsson.kristofer@gmail.com',
    'jared@jaredsilver.name',
    'samueljdenny@gmail.com',
    'joe@beigerecords.com',
    'maurocarrero@adinet.com.uy',
    'timp@pandell.com',
    '2bux89+dk3zspjmuh16o@sharklasers.com',
    'fpoumian@gmail.com',
    'peernohell@gmail.com',
    'jepsersk8@gmail.com',
    'brovko.artem@gmail.com',
    'lucasassis413@gmail.com',
    'developer@georgehrke.com',
    'vjeux@fb.com',
    'asredzki@teslamotors.com',
    'tafkasorg@yahoo.de',
    'tony@3alves.com',
    'loudon.dan@gmail.com',
    'jmm.seasons@gmail.com',
    'basaratali@gmail.com',
    'michele@locati.it',
    'ralphtheninja@riseup.net',
    'mrassili@aol.com',
    'migsmarques@gmail.com',
    'tardijkhof@gmail.com',
    'nicklaus.roach@gmail.com',
    'andy@lindeman.io',
    'wgao19@gmail.com',
    'angelkitty6698@gmail.com',
    'sbhuey@gmail.com',
    'yuval.langer@gmail.com',
    'jmw.jeremymwells@gmail.com',
    'jill.marcum@gmail.com',
    'malaney@gmail.com',
    'patronum@outlook.com',
    'github@spam.herberth.eu',
    'kjss10@gmail.com',
    'sanxiyn@gmail.com',
    'jelbourn@gmail.com',
    'alexander.schwenn@gmail.com',
    'mgasvoda@mercatus.gmu.edu',
    'kboone00@gmail.com',
    'Ross.Justin.t@gmail.com',
    'hello@samgoddard.co.uk',
    'tesseralis@gmail.com',
    'twisterghost@gmail.com',
    'bking@hopper.com',
    'danielczyk.szymon@gmail.com',
    'andyg3@gmail.com',
    'phausler@apple.com',
    'graham.inggs+github@gmail.com',
    'rajendraarora16@yahoo.com',
    'omarafifi@windowslive.com',
    'kevin.simper@gmail.com',
    'alisher.davronov@gmail.com',
    'zenofwolf@live.dk',
    'samuel.gordalina@gmail.com',
    'spolischook@gmail.com',
    'andrewnfcoulton@gmail.com',
    'denis.vinokurov@gmail.com',
    'matthias.althaus@iserv.eu',
    'kevin@kdecherf.com',
    'jdrusso1020@gmail.com',
    'twe@scformulae.com',
    'manu@sprain.ch',
    'mholtzman@gmail.com',
    'jjbohn@gmail.com',
    'open@temporaer.net',
    'sofiane.haddag@yahoo.fr',
    'contact@ghazybenahmed.com',
    'jediknil@belkadan.com',
    'steve@stevegrunwell.com',
    'hendrik.makait@googlemail.com',
    'sogasg@gmail.com',
    'chris@chrisshepherd.me',
    'nocibambi@gmail.com',
    'hiebert@uvic.ca',
    'roope.hakulinen@gmail.com',
    'juan@flioh.com',
    'cesine@yahoo.com',
    'simulus@gmail.com',
    '2796gaurav@gmail.com',
    'fejese@fejese.com',
    'gavin@usemarkup.com',
    'kaveetlaxmidas@gmail.com',
    'javan@javan.us',
    'hulettbh@gmail.com',
    'klaasvw@gmail.com',
    'ricky@ez2.us',
    'emil.bruckner@gmail.com',
    'marek.janca@ackee.cz',
    'matthusby@gmail.com',
    'kevinslin8@gmail.com',
    'lorrissaintgenez@gmail.com',
    'mukul.ram97@gmail.com',
    'snatchev@twitter.com',
    'starsfm@gmail.com',
    'speijnik@anexia-it.com',
    'erez@studio-hitchadshut.co.il',
    'dana@dana.is',
    'ikeryo1182@gmail.com',
    'readyready15728@gmail.com',
    'matteosantama@gmail.com',
    'alexandre.geslin@external.grdf.fr',
    'jdmcbr@gmail.com',
    'rmpic30@gmail.com',
    'techtonik@gmail.com',
    'istio.testing@gmail.com',
    'rody@rodyhaddad.com',
    'charles@thunderpos.com',
    'aadibajpai@gmail.com',
    'ilya@schurov.com',
    'kylea.parker@gmail.com',
    'mal.graty@googlemail.com',
    'ceyhunozugur@gmail.com',
    'vadim.macagon@gmail.com',
    'robert.reimann@googlemail.com',
    'enej.bajgoric@gmail.com',
    'anand.mohit001@gmail.com',
    'mattijs@arttech.nl',
    'zbruggeman@me.com',
    'wilahti@gmail.com',
    'cristianojorgy@hotmail.com',
    'ismai23l@hotmail.com',
    'andy.slezak@gmail.com',
    'vijsuvig@gmail.com',
    'thymikee@gmail.com',
    'vpetrovych@malkosua.com',
    'maxime.ailloud@gmail.com',
    'adtac@google.com',
    'sainthkh@naver.com',
    'endremborza@gmail.com',
    'duosrx@gmail.com',
    'sdemurjian@gmail.com',
    'divergentdave@gmail.com',
    'jj.weber@gmail.com',
    'kilian.lieret@posteo.de',
    'asouza@kde.org',
    'sasurau4@gmail.com',
    'lhames@apple.com',
    'wybren.koelmans@skydreams.com',
    'andrew@ecomloop.com',
    'jeroen@fieg.nl',
    'juanluisgarciaborrego@gmail.com',
    'anton.z@live.com',
    'robertjscott@google.com',
    'dana@gatsbyjs.com',
    'akameco.t@gmail.com',
    'wellingtoncordeiro@workfront.com',
    'thomas@savoy-truffle.de',
    'dschafer@fb.com',
    'willy@entropi.info',
    'blake@coin-operated.net',
    'vasilij@d4d.lt',
    'dcgoodwin2112@gmail.com',
    'iminar@google.com',
    'sbaramov@gmail.com',
    'iquito@gmx.net',
    'erik.saunier@gmail.com',
    'evanvosberg@urban.to',
    'stanton@haas.berkeley.edu',
    'jaxx2104@gmail.com',
    'stchoi@twosigma.com',
    'zhao.xiangpeng@zte.com.cn',
    'christopher@39digits.com',
    'lespaul85@gmail.com',
    'eve@loadsmart.com',
    'mukul.rathi@gmail.com',
    'dominik.jaglo@gmail.com',
    'torben@dannhauer.de',
    'zdravkov.pl@gmail.com',
    'andrewschandler@gmail.com',
    'collinslyle@gmail.com',
    'justinsolinsky@Justins-MacBook-Pro.local',
    'jsturtevant@gmail.com',
    'me@derrabus.de',
    'sairam546@gmail.com',
    'xavier@pandawan-technology.com',
    'cordoval@gmail.com',
    'keziah.moselle@gmail.com',
    'daneybartram@gmail.com',
    'fuckgit@fuckgit.fuck',
    'cwiesenekker@gmail.com',
    'imagentlemail@gmail.com',
    'peluja1012@gmail.com',
    'leone@spideo.tv',
    'borggreve@gmail.com',
    'barman.rajdeep@gmail.com',
    'dave@znu.io',
    'lars@wallenborn.net'
    ]

emails.forEach(element => {
    console.log(element)
    var mailOptions = {
        from: 'your email address',
        to: element,
        subject: 'A quick favor? Help us out with what can be best shown on GitHub',
        html: `
  Hi, <br>
    &nbsp;&nbsp;&nbsp;This is Akhila Sri Manasa from <a href="https://rishalab.in">RISHA Lab</a>, Dept. Of Computer Science and Engineering, IIT Tirupati, India. This email is to find what metrics you think could be shown on GitHub to reduce the user's search space in finding projects that are good for them to contribute or fork and re-use as a library. Though GitHub shows a lot of insightful information to its users, finding evidence of maintainability or continued advancement or developer productivity of a repository is not straightforward, and one has to mine and explore the repository.

    <br>
    <br>
    I am working on this research project to best collect metrics from pro-developers like you, and display them as badges on the GitHub page, so that novice programmers or other users can find first information about how good the repository is.

    <br>
    <br>
    If you could take some of your precious time and leave us your insights in the <a href="https://forms.gle/zdUmYefbKDk8gBoC8">google form</a>, we would appreciate it. The average time to fill out the form would be around 10-15 minutes. 

    <br>
    <br>
    Thanks in advance for your attention and participation.
    
    <br>
    <br>
    We will use this data only for non-commercial research and academic purposes.
    
    <br>
    <br>
    <i>Please feel free to contact us:
    <br> Akhila Sri Manasa Venigalla, cs19d504@iittp.ac.in
    <br> Kowndinya Boyalakuntla , cs17b032@iittp.ac.in
    <br> Sridhar Chimalakonda, ch@iittp.ac.in </i>
`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});
