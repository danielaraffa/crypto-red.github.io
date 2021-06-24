module.exports = {
    _plurals: {
        "key": {
            "one": "key",
            "many": "keys"
        }
    },
    words: {
        "ok": "ok",
        "message": "message",
        "account": "account",
        "accounts": "accounts",
        "acronym": "acronym",
        "address": "address",
        "close": "close",
        "cancel": "cancel",
        "copy": "copy",
        "confirmation": "confirmation",
        "name": "name",
        "password": "password",
        "open": "open",
        "loading": "loading",
        "new": "new",
        "next": "next",
        "refresh": "refresh",
        "top up": "top up",
        "random": "random",
        "backup": "backup",
        "delete": "delete",
        "today": "today",
        "show": "show",
        "balance": "balance",
        "transactions": "transactions",
        "charts": "charts",
        "send": "send",
        "receive": "receive",
        "settings": "settings",
        "share": "share",
        "reset": "reset",
        "24h": "24h",
        "7d": "7d",
        "30d": "30d",
        "1y": "1y",
        "price": "price",
        "market cap": "market cap",
        "public key": "public key",
        "private key": "private key",
        "crypto id": "crypto ID",
        "total supply": "total supply",
        "all-time high": "All-Time High",
        "all-time low": "All-Time Low",
        "homepages": "homepages",
        "block explorers": "block explorers",
        "forum": "forum",
        "chat": "chat",
        "feelings": "feelings",
        "development score": "dev. score",
        "average score": "avr. score",
        "liquidity": "liquidity",
        "confirm": "confirm",
        "encrypt": "encrypt",
        "decrypt": "decrypt",
        "send at": "send at",
        "send back": "send back",
        "send from": "send from",
        "send from public key": "send from public key",
        "send to public key": "send to public key",
        "send to": "send to",
        "memo": "memo",
        "amount": "amount",
        "fee": "fee",
        "learn": "learn",
        "url": "url",
        "link": "link",
        "locales": "locales",
        "currency": "currency",
    },
    sentences: {
        "new account": "New account",
        "open an account": "Open an account",
        "incorrect address": "Incorrect address",
        "incorrect amount": "Incorrect amount",
        "incorrect message": "Incorrect message",
        "confirm transaction": "Confirm transaction",
        "send this transaction": "Send this transaction?",
        "loading": "Loading...",
        "load more": "Load more",
        "pick a date": "Pick a date",
        "stay logged": "Stay logged",
        "market cap rank": "Market cap rank",
        "all accounts": "All accounts",
        "alexa rank": "Alexa rank",
        "today score": "Today score",
        "no balance": "No balance",
        "account name cannot be empty": "Account name cannot be empty",
        "account name": "Account's name",
        "wrong password": "Wrong password",
        "wrong password input": "Wrong password input",
        "wrong password confirmation": "Wrong password confirmation",
        "something is incorrect": "Something is incorrect",
        "bip39 mnemonic": "Bip39 mnemonic",
        "create a new account": "Create a new account",
        "address successfully copied": "Address successfully copied",
        "url successfully copied": "Url successfully copied",
        "text successfully copied": "Text successfully copied",
        "cannot copy this address": "Cannot copy this address",
        "cannot copy this url": "Cannot copy this url",
        "cannot copy this text": "Cannot copy this text",
        "cannot copy non-existent url": "Cannot copy a non-existent url",
        "cannot copy non-existent text": "Cannot copy a non-existent text",
        "cannot copy a null address": "Cannot copy \"null\" address",
        "cannot load more transaction": "Cannot load more transactions...",
        "copy address": "Copy address",
        "the longer you look the shiner i get": "The longer you look, the shiner I get",
        "take a picture it last longer": "Take a picture, it last longer",
        "stop bitchslapping me": "Stop bitchslapping me!",
        "hey i am jamy": "Hey, I am Jamy.",
        "you need to add fund to this account": "You need to add fund to this account",
        "just do it trough the link in the menu": "Just do it trough the link in the menu",
        "no transactions maid": "You've not made any transactions yet, transactions will show up here",
        "no transactions maid chart": "You've not made any transactions yet, latest transactions will show up here in a chart.",
        "no transaction maid portfolio": "You've not made any transactions yet, therefore your portfolio is empty but it will show here.",
        "cannot load QR code scanner": "Cannot load QR Code scanner",
        "transaction sent": "Transaction sent",
        "scan an address": "Scan an address",
        "online": "We're online!",
        "offline": "We're offline!",
    },
    components: {
        about_faq: {
            organization: {
                name: "Orgnaization",
                qa: [
                    {question: "Who is crypto.red?", answer: "Crypto.red is an open-source project coded by a single programmer from scratch (which is/was a bit of a mad developer and designer) who realised one of his mission was to provide something life-hackers would love. He also make sure to maintain a good networking with non-dangerous hackers and bring other open-source projects money earned."},
                    {question: "Who can contribute to this project?", answer: "Anyone, see https://github.com/crypto-red to get involved."},
                    {question: "Who decide what to code?", answer: "Our team which is on GitHub (https://github.com/crypto-red) must agree together, meanwhile, one may duplicate the project for its own need."},
                    {question: "Who have funded this project?", answer: "Anonymous."},
                ]
            },
            security: {
                name: "Security",
                qa: [
                    {question: "How does my coin are stored?", answer: "Your coin are stored on the behalf of your seed (private key in particular), which can only be used with the access to the blockchain respectively to the wallet in question. Many exchanges keep your coins when you're not withdrawing them, we do not."},
                    {question: "How does my data are encrypted?", answer: "Your data are encrypted trough Triplesec, see (https://keybase.io/triplesec) to get more information."},
                    {question: "Where does my data are stored?", answer: "Your seed (you're whole account) can generate all your crypto wallet it is stored in clear on your computer (with PouchDB on your browser) in persistent mode when logged and encrypted in non-persistent mode or when logged out."},
                    {question: "What if I loose my seed?", answer: "If you loose your seed, (You should write it down on paper) you can only get it back if you're account has not be cleared from your browser, you may need to log in or not."},
                    {question: "What if I loose my password?", answer: "No worries, only your seed is needed to get back everything."},
                    {question: "Can I print my password / seed?", answer: "When you're using the persistent mode for connection or if you print / store a document on your computer or printer, it may mostly last forever even if you format your storing device."},
                ]
            },
            privacy: {
                name: "Privacy",
                qa: [
                    {question: "What is public on my account?", answer: "Your public key (blockchain address). You should not link your identity with your wallet's address if you want a complete privacy. You can also use a crypto mixer to obfuscate the source of your funding on a new wallet."}
                ]
            },
            fees: {
                name: "Fees",
                qa: [
                    {question: "What are the fees of using it?", answer: "We have an affiliate link for selling and trading cryptocurrency, theses partners rewards us with a part of their profit, meanwhile they compare where you can buy and trade cryptocurrency at the best exchange rate without increasing the operation cost for you."}
                ]
            },
            usage: {
                name: "Usage",
                qa: [
                    {question: "Should I use it if it can present a risk for my fund?", answer: "You should download a stable version from torrent download if you want to use it with a lot of money on it."}
                ],
            }
        },
        about_info: {
            intellectual: {
                title: "Intellectual property",
                content_markdown: "MIT License\n" +
                    "\n" +
                    "Copyright (c) 2021 vipertech.ch\n" +
                    "\n" +
                    "Copyright (c) 2021 crypto.red\n" +
                    "\n" +
                    "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n" +
                    "\n" +
                    "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n" +
                    "\n" +
                    "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
            },
            terms: {
                title: "Terms of use",
                content_markdown: "Wallet.crypto.red Terms of Use\n" +
                    "\n" +
                    "Date of Revision. 11 April, 2021\n" +
                    "\n" +
                    "Please read these Terms carefully before using this website. By using this website (the \"Website\"), the user (\"You\") has accepted these Terms of Use. If You do not accept these Terms of Use, do not use the Website. By using this Website, you represent that you are of legal age to form a binding contract with Crypto.red.\n" +
                    "\n" +
                    "CRYPTO RED (crypto.red and its subdomains) may modify all or any part of these Terms of Use from time to time and may not provide notice to You. You are encouraged to check back often so You are aware of your current rights and responsibilities. Your continued use of this Website after changes to the Terms of Use have been published constitutes your binding acceptance of the updated Terms of Use. If at any time the Terms of Use are no longer acceptable to You, You should immediately cease all use of this Website.\n" +
                    "\n" +
                    "1.  Statement of Purpose. The purpose of Wallet.crypto.red is to enable individuals and organizations to access the world of cryptocurrency throughout a simple yet powerful open-source software more especially called a progressive web app (PWA). The site is designed to enable one to buy, sell, trade, and interact with cryptocurrency. It is also designed to encourage the creation of a user community to make this life a wonderful adventure when it comes to cryptocurrency generally speaking.\n" +
                    "    \n" +
                    "2.  User Registration. Registration at wallet.crypto.red is optional but encouraged. If you are registered at wallet.crypto.com, Crypto.red and its subdomains will not be able to contact you with information that you shared with this application, in reality, all that you've registered on this site instance will stay on your computer and will never be shared with any network excepted when you need to make transactions or network requests, then, only non-private information will be shared as it needs to like the public address of your computer or cryptocurrency seed-derived address. You agree not to sell or transfer your use of or access to this Website or permit anyone else whose account was suspended or terminated to use this Website through your user name or password. You are responsible for maintaining the confidentiality of your password and account and for all activity that occurs on your account.\n" +
                    "    \n" +
                    "3.  Fees at third-party provider. Fees at: trading, buying, selling, and withdrawing among others cryptocurrencies may apply, theses fees are not higher and in some case lower when you pass trough this website to operate a contract with a third-party service provider such as Changelly or swapspace, the platforms mentioned before charges fees and rewards crypto.red for the clients comming from this application, it helps fund this software. You can use any third-party exchanges you want which aren't listed on this website, our partners should theoretically have the best bid for your need nonetheless.\n" +
                    "    \n" +
                    "4.  LIMITATION ON LIABILITY. THIS WEBSITE AND ALL CONTENT, MATERIALS, INFORMATION, SOFTWARE, PRODUCTS AND SERVICES ARE PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS. YOUR USE OF THIS WEBSITE IS AT YOUR OWN RISK. CRYPTO RED DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. TO THE FULLEST EXTENT PERMITTED BY LAW, CRYPTO RED IS NOT LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL,CONSEQUENTIAL, OR EXEMPLARY DAMAGES (INCLUDING, WITHOUT LIMITATION, LOSS OF BUSINESS, REVENUE, PROFITS, GOODWILL, USE, DATA, ELECTRONICALLY TRANSMITTED ORDERS, OR OTHER ECONOMIC ADVANTAGE) ARISING OUT OF OR IN CONNECTION WITH THE WEBSITE, EVEN IF CRYPTO RED HAS PREVIOUSLY BEEN ADVISED OF, OR REASONABLY COULD HAVE FORESEEN, THE POSSIBILITY OF SUCH DAMAGES, HOWEVER THEY ARISE, WHETHER IN BREACH OF CONTRACT OR IN TORT (INCLUDING NEGLIGENCE), INCLUDING WITHOUT LIMITATION DAMAGES DUE TO (a) THE USE OF OR THE INABILITY TO USE THE WEBSITE; (b) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO, THROUGH OR FROM THE WEBSITE; ( c) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE WEBSITE, INCLUDING WITHOUT LIMITATION UNAUTHORIZED ACCESS TO OR ALTERATION OF TRANSMISSIONS OR DATA, MALICIOUS OR CRIMINAL BEHAVIOR, OR FALSE OR FRAUDULENT TRANSACTIONS, OR (d) CONTENT OR INFORMATION YOU MAY DOWNLOAD, USE, MODIFY OR DISTRIBUTE. CRYPTO RED MAKES NO WARRANTY THAT, (i) THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (ii) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE WILL BE ACCURATE OR RELIABLE, (iii) THE QUALITY OF ANY PRODUCTS, SERVICES, CONTENT, INFORMATION, OR OTHER MATERIALS OBTAINED BY YOU THROUGH THE SERVICE WILL MEET YOUR EXPECTATIONS, (iv) ANY ERRORS IN THE SOFTWARE WILL BE CORRECTED, OR THAT THIS WEBSITE, ITS CONTENT, AND THE SERVER ON WHICH THE WEBSITE AND CONTENT ARE AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. ANY MATERIAL (INCLUDING CONTENT) DOWNLOADED OR OBTAINED THROUGH THE USE OF THIS WEBSITE IS DONE AT YOUR OWN RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY MATERIAL. INFORMATION CREATED BY THIRD PARTIES THAT YOU MAY ACCESS ON THIS WEBSITE OR THROUGH LINKS IS NOT APPROVED, ADOPTED OR ENDORSED BY CRYPTO RED AND REMAINS THE RESPONSIBILITY OF THE THIRD PARTY.TO THE EXTENT ANY JURISDICTION DOES NOT ALLOW THE EXCLUSION OR LIMITATION OF DIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES, PORTIONS OF THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY."
            }
        },
        about_wiki: {
            topup: {
                title: "How to top-up",
                content_markdown: "Although we receive nothing if you don't use Changelly, it is a simple service and the second recommended after public ATMs for privacy concerns.\n" +
                    "\n" +
                    "You will have to follow the instruction and at the end enter the public address of the coin selected of the account you've chosen and that's it, you can pay by card and do it quickly and simply."
            },
            mixer: {
                title: "How to mix cryptocurrency",
                content_markdown: "We currently use Blender.io, it will enable you to mix your coin with other coin it will be like if your coins disappeared in the nether and from completely different sources came (other coins nearly with the same amount) to an address (maybe a completely new one if you create a new account for that) hours or even days later!\n" +
                    "\n" +
                    "You just have to create a new account on wallet.crypto.red in order to generate a fresh new and new address and to put that address in the mixer (you can split the amount send to multiples address). Then just send the amount you like from the account you have chosen to use for sending coins.\n" +
                    "\n" +
                    "Be careful! Don't send back the coins you received from the mixer onto the new address you've freshly created, it will enable one to know that this address is linked to the previous one (obvious captain)."
            },
            swap: {
                title: "How to swap cryptocurrency",
                content_markdown: "You have to go to the convert menu item in the drawer at left (burger menu on mobile devices) and use a \"swap\" services, we currently use SwapSpace.co since it doesn't charge more than the showed swap exchange that it compare for you so you can be sure to pay the less on the market!\n" +
                    "\n" +
                    "You have to choose the amount an the currency you want to send along with the currency you want to receive in exchange. Then click on the \"VIEW OFFERS\" button.\n" +
                    "\n" +
                    "Then just choose the exchange you want to use for the conversion you're doing, it should show many offers of all-trusted exchange. So when you have clicked on the \"EXCHANGE\" button just enter the new address of the currency you will receive, you have to copy the right address from the right account of yours of the cryptocurrency you have chosen to receive in exchange of the amount you'll have to send.\n" +
                    "\n" +
                    "**In other words:**\n" +
                    "\n" +
                    "1.  Enter the amount and choose the swap service.\n" +
                    "2.  Enter the recipient address.\n" +
                    "3.  Transfer your funds to the exchange service.\n" +
                    "4.  Wait for the exchange to proceed."

            },
            crypt: {
                title: "Encrypt and decrypt messages",
                content_markdown: "In order to decrypt a message someone has sent to you, you'll have to know both your public and private key linked to the message which is an obfuscated text, since the software knows it, if you go onto tools then crypto then decrypt then autofill keys, the keys will be magically filled into our cryptographic system. You'll only have to copy the obfuscated message received and click autofill then show.\n" +
                    "\n" +
                    "In order to encrypt a message to someone, you'll have to know the receiver's public key, just look at a transaction from this person and copy the public key which you'll have to enter in the cryptographic tool (Encrypt tab) in tools then crypt along with the message. If you click autofill keys on encrypt section, it will be meant to be sent to yourself."

            },
            contribute: {
                title: "How to contribute",
                content_markdown: "You can contribute to our repository, this is where our code and application is hosted: [https://github.com/crypto-red/crypto-red.github.io](https://github.com/crypto-red/crypto-red.github.io) (everything is transparent on GitHub). You can also donate to us in order to accelerate de development of this project and other projects (since we also fund other projects that we use trough [OpenCollective](https://opencollective.com/crypto-red)) trough sending bitcoin in the address shown where our code is hosted."

            }
        },
        account_card: {
            crypto_balance_error: "{{crypto_id}} balance error"
        },
        account_dialog_backup: {
            seed: "Seed of {{account_name}}",
            store: "STORE IT ON PAPER, NEVER SHARE THIS SEED TO ANYONE!!!",

        },
        account_dialog_close: {
            close: "Close {{account_name}}?",
            opened: "This account was opened {{time_ago}}"
        },
        account_dialog_create: {
            password_evaluation_warning: "WARNING: Only {{time}} is required to crack your password.",
            password_evaluation_good: "That's good! Your password is strong.",
            password_strength: "Password strength is {{score}} / 4",
            configuration_view: {
                description:
                    "Provide a name and a STRONG PASSWORD in order to create a new account.\n" +
                    "Everything that you type won't never be send to anyone, it will stay on your device.\n" +
                    "Once a name and a password to encrypt your backup phrase is set, we will enable you to manually create or import your new backup phrase (called a mnemonic)."
            },
            mnemonic_view: {
                description:
                    "Use an old backup phrase from another wallet or use a new random backup phrase.\n" +
                    "The backup phrase is a like a seed password that will create a master key, from this key, it will create derived keys pair for each cryptocurrency.\n" +
                    "The password you typed in the first step will enable you to log in using a password instead of this  backup phrase each and every time.\n",
                description_bold: "Make sure no one is looking before completing the field below and STORE IT ON PAPER for a better security.",
                usual_seed: "An usual seed for a bip39 mnemonic is 12 words long.",

            },
            generation_view: {
                generating: "Generating...",
                error: "ERROR: Your account has not been created.",
                success: "Your account will be soon displayed.",
                description: "We need to create one address for each cryptocurrency listed, theses address are anonymous since they aren't linked to yourself. We'll automatically backup your account on your computer, if you change your password replace the backup file and delete the old one.",
            },
            stepper: {
                configure: "configure",
                import: "import",
                create: "create",

            }
        },
        account_dialog_delete: {
            cannot_be_undone: "This action CANNOT be undone. This will delete the {{account_name}}} account and it's wallets permanently.",
            repeat_name: "Please Type in the name of the account to confirm."
        },
        account_dialog_open: {
            warning_password_stored_browser: "WARNING: Your password will stored be in your browser.",
            open_account: "Open the {{account_name}} account and it's wallets temporarily.",
            write_password: "Please Type in the password of the account to log in."
        },
        address_dialog: {
            title: "Coin's ID {{coin_id}}",
        },
        coin_send: {
            title: "Balance: {{balance}}",
            body: "The average transaction time is {{average_transaction_time}}, and the message is limited to {{max_message_length}} characters ({{send_message_input_length}}). Fees will be calculated in the next step."
        },
        crypt_dialog: {
            warning_encrypt_to_yourself: "Warning, do you want to encrypt a message to yourself?",
            result_dialog: {
                decrypt_title: "Decrypt text ({{length}} length) result",
                encrypt_title: "Encrypt text ({{length}} length) result",
            },
            autofill_dialog: {
                title: "Autofill keys",
                body: "Select from which coin the public and private keys should be generated",
            },
            title_decrypt: "Decrypt text using NaCl",
            title_encrypt: "Encrypt text using NaCl",
            body: "You have to provide either a public key to encrypt a message (Someone else public key) or both the public and private key (Your key pair) to decrypt the message.",
            why_link_text: "See why...",
            autofill_key: "autofill key",
            autofill_keys: "autofill keys"
        },
        dashboard_bar_chart: {
            title: "1 Year performance",
        },
        dashboard_line_chart: {
            title: "Latest transactions",
        },
        dashboard_pie_chart: {
            title: "Portfolio and balance",
        },
        dashboard_quick_card_mobile: {
            total: "Total balance:",
            number: "Cryptocurrency numbers:",
            btc_performance: "Performed / BTC:",
            performance: "Performed:",
        },
        drawer_content: {
            help_dialogs_data: {
                topup: {
                    id: "topup",
                    url: "https://changelly.com/",
                    image: "card.svg",
                    title: "Do you know how to top up?",
                    body: "To add fund to one of your cryptocurrencies, you have to pass trough an exchange.",
                    help_link: "/about/wiki/topup",
                    help_link_content: "Learn more..."
                },
                mixer: {
                    id: "mixer",
                    url: "https://blender.io/",
                    image: "hacker.svg",
                    title: "Do you know how and why to use a mixer?",
                    body: "To obfuscate the source of your coin, you can use a mixer, it will make it difficult to link two wallet together.",
                    help_link: "/about/wiki/mixer",
                    help_link_content: "Learn more..."
                },
                swap: {
                    id: "swap",
                    url: "https://swapspace.co?ref=6264baf9e63aa11df52cd6d3",
                    image: "swap.svg",
                    title: "Do you know how to trade your assets?",
                    body: "To exchange one currency to another, you have to pass trough an swap platform.",
                    help_link: "/about/wiki/swap",
                    help_link_content: "Learn more..."
                }
            },
            dont_show_again: "Don't show it again",
            go: "go",
            menu: {
                dashboard: "Dashboard",
                all_coins: "All coins",
                coins: "Coins",
                trade: {
                    trade: "Trade",
                    top_up: "Top up",
                    mixer: "Mixer",
                    swap: "Swap",
                    atm: "ATM",
                },
                tools: {
                    tools: "Tools",
                    crypt: "Crypt",
                },
                about: {
                    about: "About",
                    info: "Info",
                    wiki: "Wiki",
                    faq: "F.A.Q.",
                    source_code: "Source code",
                    donations: "donations",
                }
            }
        },
        inner_toolbar: {
            guest: "Guest",
        },
        share_dialog: {
            title: "Share",
            url: "Url",
            thanks_for_sharing: "Yes thanks for sharing",
        },
        transaction: {
            unconfirmed: "(Unconfirmed)",
        },
        transaction_dialog: {
            title: "Transaction's ID {{transaction_id}}",
        }
    },
    pages: {
        index: {
            first_snackbar: "Multi-cryptocurrency wallet in ReactJS",
            second_snackbar: "Open-source, for free, for everyone, forever",
            carousel: {
                button_label: "Get Started",
                slides: [
                    {
                        img: "/src/images/logo-transparent.png",
                        title: "Welcome",
                        subtitle: "Wallet.crypto.red is an free, anonymous, and open-source software.",
                    },
                    {
                        img: "/src/images/invest.svg",
                        title: "Investment freedom",
                        subtitle: "Investing has never be so simple while being open, just buy some crypto at ATM, or easily with Changelly or else without fees.",
                    },
                    {
                        img: "/src/images/trade.svg",
                        title: "Good anonymous trading",
                        subtitle: "Wallet Crypto Red doesn't push you to swap your crypto, we only suggest you to hold some funds freely without fees with a strong belief in privacy.",
                    },
                    {
                        img: "/src/images/open.svg",
                        title: "Wallet made open source",
                        subtitle: "Our software for cryptocurrency payments is certified to be 100% open-source, anyone can see the code, more eyes, more secure. Trust people.",
                    }
                ],
            }
        },
        accounts: {
            logged_new_account: "You're logged to a new account.",
        },
        coins: {
            name: "Name",
            coins_name: "Coin's name",
            price: "Price",
            current_price: "Current price",
            day: "Day",
            price_change_day: "Price change within 24h",
            week: "Week",
            price_change_week: "Price change within 7d",
            month: "Month",
            price_change_month: "Price change within 30d",
            year: "Year",
            price_change_year: "Price change within 1y",
            market_capitalization_short: "Market cap.",
            market_capitalization: "Market capitalization"
        },
        dashboard: {
            crypto_balance_error: "{{crypto_id}} balance error",
            coin_market_data_error: "Coins market data error",
            new_to_crypto_cta: "New to cryptocurrencies ? Learn how to invest !",
            total_balance: "Total balance",
            number_of_cryptos: "Number of cryptocurrency",
            performed_btc: "Performed / BTC (1y)",
            performed_percent: "Performed % (1y)",
        },
        home: {
            quotes: [
                {author: "Charlie Chaplin", text: "You, the people have the power - the power to create machines. The power to create happiness! You, the people, have the power to make this life free and beautiful, to make this life a wonderful adventure."},
                {author: "Unknown", text: "Know that the heavens were created to descend into the five elemental manifestations. One piece, a small mirror of all others. It is all the same. All the same. Each piece of existence is its own small universe."},
                {author: "Nikola Tesla", text: "What we now want is closer contact and better understanding between individuals and communities all over the earth, and the elimination of egoism and pride which is always prone to plunge the world into primeval barbarism and strife... Peace can only come as a natural consequence of universal enlightenment..."},
                {author: "Eric Schmidt", text: "Bitcoin is a remarkable cryptographic achievement and the ability to create something that is not duplicate in the digital world has enormous value."},
                {author: "Oscar Wilde", text: "Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth."},
                {author: "Elon Musk", text: "Being able to talk to people over long distances, to transmit images, flying, accessing vast amounts of data like an oracle. These are all things that would have been considered magic a few hundred years ago. So engineering is for all intents and purposes, magic, and who wouldn't want to be a magician?"},
                {author: "Unknown", text: "If the word government literally means \"to control the mind,\" wouldn't learning to control your own mind negate the opportunity for outside government? You see, it's the simple act of asking questions that exemplifies the Achilles heel of the control system; you can condition animals, but if humans ask questions, they can learn the path to freedom."},
                {author: "Unknown", text: "Truth cannot be taught. It must be experienced therefore always consider the inner light of understanding before the outer light of common dogma."},
                {author: "Gandhi", text: "There are many causes I would die for. There is not a single cause I would kill for."},
                {author: "Unknown", text: "You know what, sometimes I really do not know what needs to be done here on earth to get the people moving because they are still sitting in their chair. And I do not refer to violent rebellion of some kind. No, I am talking about making connection. Unite."},
            ],
            ready_to_start_cta: "Ready to start now? Create a new anonymous wallet!",
        },
        settings: {
            settings_changed: "Settings changed",
            language: "Language",
            currency: "Currency",
            sound: "Sound",
            enable_sound_effects: "Enable sound effects",
            superintendent: "Superintendent",
            enable_the_superintendent: "Enable the superintendent",
            make_jamy_active: "Make Jamy active",
            description_of_jamy: "Jamy is responsible for the surveillance, judgement, and reaction of your actions as a user. He can't tell anyone what you are doing, but he is present if you enable him to be so.",
            security: "Security",
            enable_reset_option_in_menu: "Enable reset option in menu"
        }
    },
};