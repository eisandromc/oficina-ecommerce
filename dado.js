// colecao do carrinho
const colecaoCarrinho = [];

// colecao de produtos
const colecaoProdutos = [
  {
    id: "a1f4c8e9",
    nome: "Smartphone Samsung Galaxy A54",
    preco: 1799.99,
    descricao: "Tela AMOLED de 6.4'', 128GB, Câmera Tripla, Bateria de longa duração.",
    foto: "25384_product-00082557_m7_638151793624629775.webp",
    categoria: "Eletrônicos",
    subcategoria: "Celular"
  },
  {
    id: "b92df6c1",
    nome: "Notebook Dell Inspiron 15",
    preco: 3599.90,
    descricao: "Intel i5, 8GB RAM, 256GB SSD, Tela Full HD 15.6''.",
    foto: "bf0fdc22ae2b4a4765424a3f6db86d6b.webp",
    categoria: "Eletrônicos",
    subcategoria: "Informática"
  },
  {
    id: "c6be7f3d",
    nome: "Smart TV LG 50'' 4K UHD",
    preco: 2299.00,
    descricao: "Tela 4K, webOS, HDR, Controle Smart Magic.",
    foto: "168984.png",
    categoria: "Eletrônicos",
    subcategoria: "TV"
  },
  {
    id: "dcb8a0e7",
    nome: "Fone de Ouvido Bluetooth JBL Tune 510BT",
    preco: 299.99,
    descricao: "Áudio JBL Pure Bass, até 40h de bateria, Bluetooth 5.0.",
    foto: "fone-imag32123.jpeg",
    categoria: "Eletrônicos",
    subcategoria: "Áudio"
  },
  {
    id: "e1a67cb3",
    nome: "Console PlayStation 5",
    preco: 4299.00,
    descricao: "Desempenho de nova geração, SSD ultra rápido, suporte a jogos 4K.",
    foto: "1072360_console-playstation-5-sony-cfi2014-slim-bundle-1-com-leitor-midia-ssd-1tb-2-jogos-10010667_l1_638572456195112308.webp",
    categoria: "Eletrônicos",
    subcategoria: "Games"
  },
  {
    id: "f93bc524",
    nome: "Tablet Samsung Galaxy Tab A8",
    preco: 1299.00,
    descricao: "Tela de 10.5'', 64GB, som Dolby Atmos, ótimo para estudo e lazer.",
    foto: "71vScvyCWDL.jpg",
    categoria: "Eletrônicos",
    subcategoria: "Tablet"
  },
  {
    id: "g45aeb67",
    nome: "Monitor LG 24” Full HD",
    preco: 899.99,
    descricao: "Painel IPS, 75Hz, 1ms, ideal para produtividade e jogos.",
    foto: "monitor-gamer-lg-ultragear-24-pol-full-hd-180hz-ips-1ms-freesyncg-sync-hdmidp-24gs60f-bawzm_208307.jpg",
    categoria: "Eletrônicos",
    subcategoria: "Informática"
  },
  {
    id: "h67c9d12",
    nome: "Mouse Gamer Redragon Cobra",
    preco: 149.90,
    descricao: "Sensor de alta precisão, RGB, até 10000 DPI.",
    foto: "m711w-pro-2-2968-epkp0bi584.webp",
    categoria: "Eletrônicos",
    subcategoria: "Acessórios"
  },
  {
    id: "i59fba23",
    nome: "Teclado Mecânico Logitech G Pro",
    preco: 699.00,
    descricao: "Switches GX Blue, compacto e portátil, ideal para eSports.",
    foto: "teclado1234erqe.jpeg",
    categoria: "Eletrônicos",
    subcategoria: "Acessórios"
  },
  {
    id: "j18c7a45",
    nome: "Câmera GoPro HERO11 Black",
    preco: 2599.99,
    descricao: "Gravação 5.3K, estabilização HyperSmooth 5.0, resistente à água.",
    foto: "camera_gopro_hero11_black_mini_5_3k_preta_cor_preto_1761_1_d8cec8bbe4c677f3778c2fcd768df929.webp",
    categoria: "Eletrônicos",
    subcategoria: "Câmeras"
  },
  {
    id: "k64be230",
    nome: "Impressora Multifuncional HP Ink Tank 416",
    preco: 879.90,
    descricao: "Wi-Fi, impressão econômica, ideal para casa e escritório.",
    foto: "1531cb662a242b9a000b9a95850b1cf3.webp",
    categoria: "Eletrônicos",
    subcategoria: "Informática"
  },
  {
    id: "l87dc392",
    nome: "Ar Condicionado Split LG Dual Inverter 12000 BTUs",
    preco: 2399.00,
    descricao: "Econômico, silencioso, ideal para ambientes médios.",
    foto: "arcondi1231231231231asd.jpeg",
    categoria: "Eletrodomésticos",
    subcategoria: "Climatização"
  },
  {
    id: "m94fd712",
    nome: "Liquidificador Oster Super Chef",
    preco: 189.90,
    descricao: "8 velocidades, copo de vidro resistente, 750W de potência.",
    foto: "liquidad01i30odfafji234.jpeg",
    categoria: "Eletrodomésticos",
    subcategoria: "Cozinha"
  },
  {
    id: "n30cf082",
    nome: "Cafeteira Expresso Nespresso Essenza Mini",
    preco: 379.00,
    descricao: "Compacta, rápida, compatível com cápsulas Nespresso.",
    foto: "51oziqDmDyL.jpg",
    categoria: "Eletrodomésticos",
    subcategoria: "Cozinha"
  },
  {
    id: "o75eab11",
    nome: "Smartwatch Xiaomi Redmi Watch 3",
    preco: 499.99,
    descricao: "Tela AMOLED, GPS integrado, monitoramento de saúde.",
    foto: "D_NQ_NP_666085-MLU77143837906_062024-O.webp",
    categoria: "Eletrônicos",
    subcategoria: "Wearables"
  },
  {
    id: "p83cd562",
    nome: "Aspirador de Pó Vertical Electrolux PowerSpeed",
    preco: 329.00,
    descricao: "Alta potência, ideal para casa com pets, filtro HEPA.",
    foto: "0_0_675b431c447c42f8bd09f3f5.webp",
    categoria: "Eletrodomésticos",
    subcategoria: "Limpeza"
  },
  {
    id: "q21da763",
    nome: "Air Fryer Mondial 4L",
    preco: 399.00,
    descricao: "Fritadeira sem óleo, controle de temperatura, timer.",
    foto: "6ca32d0d1fb71cbb5b8457581f85e5aa.webp",
    categoria: "Eletrodomésticos",
    subcategoria: "Cozinha"
  },
  {
    id: "r58bf003",
    nome: "Cadeira Gamer ThunderX3 Yama1",
    preco: 899.90,
    descricao: "Ergonômica, apoio lombar, ideal para longas sessões.",
    foto: "cadeira_ergonomic_yama1_preta_vermelha_thunderx3_1566857181_282a_600x600.jpg",
    categoria: "Móveis",
    subcategoria: "Cadeiras"
  },
  {
    id: "s34fe116",
    nome: "Roteador TP-Link Archer AX20 Wi-Fi 6",
    preco: 499.90,
    descricao: "Dual Band, 1.8Gbps, ideal para casas com muitos dispositivos.",
    foto: "61PEyrVDs-L.jpg",
    categoria: "Eletrônicos",
    subcategoria: "Rede"
  },
  {
    id: "t29bb448",
    nome: "Balança Digital Xiaomi Mi Body Composition Scale 2",
    preco: 199.99,
    descricao: "Mede peso, gordura corporal, IMC, conexão via app.",
    foto: "sg-11134201-7reqp-m25d002bm7r42e.jpeg",
    categoria: "Eletrônicos",
    subcategoria: "Saúde"
  },
  {
    id: "u62dc509",
    nome: "Notebook Lenovo IdeaPad 3i Intel Core i5",
    preco: 2999.00,
    descricao: "8GB RAM, SSD 256GB, ideal para estudo e trabalho.",
    foto: "https://via.placeholder.com/150?text=Lenovo+IdeaPad+3i",
    categoria: "Informática",
    subcategoria: "Notebooks"
  },
  {
    id: "v15ec620",
    nome: "Monitor LG 24'' Full HD IPS",
    preco: 789.90,
    descricao: "Tela de 24 polegadas, painel IPS, conexão HDMI.",
    foto: "https://via.placeholder.com/150?text=Monitor+LG+24",
    categoria: "Informática",
    subcategoria: "Monitores"
  },
  {
    id: "w09fd731",
    nome: "Teclado Mecânico Redragon Kumara RGB",
    preco: 279.99,
    descricao: "Switch Outemu Blue, iluminação RGB, ABNT2.",
    foto: "https://via.placeholder.com/150?text=Redragon+Kumara",
    categoria: "Informática",
    subcategoria: "Acessórios"
  },
  {
    id: "x72ae842",
    nome: "Mouse Gamer Logitech G203 RGB",
    preco: 149.90,
    descricao: "Sensor de 8000 DPI, leve, iluminação RGB personalizável.",
    foto: "https://via.placeholder.com/150?text=Logitech+G203",
    categoria: "Informática",
    subcategoria: "Acessórios"
  },
  
  {
    id: "ac31dc397",
    nome: "Câmera de Segurança Intelbras Mibo IC3",
    preco: 299.00,
    descricao: "Wi-Fi, visão noturna, gravação em nuvem ou cartão SD.",
    foto: "https://via.placeholder.com/150?text=Intelbras+IC3",
    categoria: "Segurança",
    subcategoria: "Câmeras"
  },
  {
    id: "ad79ce408",
    nome: "Echo Dot 5ª Geração com Alexa",
    preco: 349.00,
    descricao: "Controle por voz, automação residencial, som aprimorado.",
    foto: "https://via.placeholder.com/150?text=Echo+Dot+5",
    categoria: "Eletrônicos",
    subcategoria: "Assistentes Virtuais"
  },
  {
    id: "ae12bf519",
    nome: "Ar-Condicionado Split LG Dual Inverter 9000 BTUs",
    preco: 2599.00,
    descricao: "Economia de energia, refrigeração rápida, silencioso.",
    foto: "https://via.placeholder.com/150?text=LG+Dual+Inverter",
    categoria: "Eletrodomésticos",
    subcategoria: "Climatização"
  },
  {
    id: "af23ca620",
    nome: "Ventilador de Mesa Arno Turbo Force 40cm",
    preco: 219.00,
    descricao: "Potente, silencioso e com 3 velocidades.",
    foto: "https://via.placeholder.com/150?text=Arno+Turbo+Force",
    categoria: "Eletrodomésticos",
    subcategoria: "Climatização"
  },
  {
    id: "ag34de731",
    nome: "Fritadeira Airfryer Mondial 4L",
    preco: 359.00,
    descricao: "Saudável, sem óleo, controle de temperatura e tempo.",
    foto: "https://via.placeholder.com/150?text=Airfryer+Mondial",
    categoria: "Eletroportáteis",
    subcategoria: "Cozinha"
  },
  {
    id: "ah45ef842",
    nome: "Cafeteira Elétrica Philco PH30",
    preco: 149.90,
    descricao: "Capacidade de 30 xícaras, jarra de vidro, função manter aquecido.",
    foto: "https://via.placeholder.com/150?text=Philco+PH30",
    categoria: "Eletroportáteis",
    subcategoria: "Cozinha"
  },
  {
    id: "ai56fc953",
    nome: "Liquidificador Oster 1400 Full",
    preco: 229.90,
    descricao: "1400W de potência, copo resistente de 3,2L, 15 velocidades.",
    foto: "https://via.placeholder.com/150?text=Oster+1400+Full",
    categoria: "Eletroportáteis",
    subcategoria: "Cozinha"
  },
  {
    id: "aj67ad064",
    nome: "Panela de Pressão Elétrica Mondial 5L",
    preco: 379.00,
    descricao: "15 funções, display digital, segura e prática.",
    foto: "https://via.placeholder.com/150?text=Panela+Mondial+5L",
    categoria: "Eletroportáteis",
    subcategoria: "Cozinha"
  },
  {
    id: "ak78bd175",
    nome: "Aspirador de Pó Vertical Electrolux 2 em 1",
    preco: 289.00,
    descricao: "Compacto, potente, ideal para limpezas rápidas.",
    foto: "https://via.placeholder.com/150?text=Aspirador+Electrolux",
    categoria: "Eletrodomésticos",
    subcategoria: "Limpeza"
  },
  {
    id: "al89ce286",
    nome: "Máquina de Lavar Consul 11kg",
    preco: 1899.00,
    descricao: "Função dosagem extra econômica, 15 programas de lavagem.",
    foto: "https://via.placeholder.com/150?text=Lavadora+Consul+11kg",
    categoria: "Eletrodomésticos",
    subcategoria: "Lavanderia"
  },
  {
    id: "am90df397",
    nome: "Ferro de Passar a Vapor Arno Smartgliss",
    preco: 139.00,
    descricao: "Base antiaderente, vapor vertical, fácil de usar.",
    foto: "https://via.placeholder.com/150?text=Ferro+Arno+Smartgliss",
    categoria: "Eletroportáteis",
    subcategoria: "Lavanderia"
  },
  {
    id: "an01eg408",
    nome: "Batedeira Planetária Mondial Premium",
    preco: 329.00,
    descricao: "Potência de 500W, 3 batedores, tigela de 4L.",
    foto: "https://via.placeholder.com/150?text=Batedeira+Mondial",
    categoria: "Eletroportáteis",
    subcategoria: "Cozinha"
  },
  {
    id: "ao12fh519",
    nome: "Smart TV Samsung 43” 4K Crystal UHD",
    preco: 1999.00,
    descricao: "Imagem de alta definição, Tizen, controle por voz.",
    foto: "https://via.placeholder.com/150?text=Samsung+43+4K",
    categoria: "Eletrônicos",
    subcategoria: "TVs"
  },
  {
    id: "ap23gi620",
    nome: "Smart TV LG 50” 4K ThinQ AI",
    preco: 2499.00,
    descricao: "Sistema WebOS, controle por voz, inteligência artificial.",
    foto: "https://via.placeholder.com/150?text=LG+50+4K+AI",
    categoria: "Eletrônicos",
    subcategoria: "TVs"
  },
  {
    id: "aq34hj731",
    nome: "Caixa de Som JBL Boombox 2",
    preco: 2290.00,
    descricao: "Potente, à prova d’água, até 24h de bateria.",
    foto: "https://via.placeholder.com/150?text=JBL+Boombox+2",
    categoria: "Eletrônicos",
    subcategoria: "Áudio"
  },
  {
    id: "ar45ik842",
    nome: "Fone de Ouvido Bluetooth Sony WH-1000XM4",
    preco: 1899.00,
    descricao: "Cancelamento de ruído, conforto e som premium.",
    foto: "https://via.placeholder.com/150?text=Sony+WH-1000XM4",
    categoria: "Eletrônicos",
    subcategoria: "Áudio"
  },
  {
    id: "as56jl953",
    nome: "Notebook Dell Inspiron i5 8GB 512GB SSD",
    preco: 3799.00,
    descricao: "Desempenho confiável, ideal para trabalho e estudo.",
    foto: "https://via.placeholder.com/150?text=Dell+Inspiron+i5",
    categoria: "Informática",
    subcategoria: "Notebooks"
  },
  {
    id: "at67km064",
    nome: "Mouse Logitech MX Master 3",
    preco: 499.00,
    descricao: "Ergonômico, personalizável, ideal para produtividade.",
    foto: "https://via.placeholder.com/150?text=Logitech+MX+Master+3",
    categoria: "Informática",
    subcategoria: "Acessórios"
  },
  {
    id: "au78ln175",
    nome: "Monitor LG 24” Full HD IPS",
    preco: 799.00,
    descricao: "Excelente qualidade de imagem, ideal para home office.",
    foto: "https://via.placeholder.com/150?text=Monitor+LG+24",
    categoria: "Informática",
    subcategoria: "Monitores"
  },
  {
    id: "av89mo286",
    nome: "Teclado Mecânico Redragon Kumara RGB",
    preco: 249.00,
    descricao: "Switches Outemu Blue, estrutura resistente.",
    foto: "https://via.placeholder.com/150?text=Redragon+Kumara",
    categoria: "Informática",
    subcategoria: "Acessórios"
  },
  {
    id: "aw90np397",
    nome: "Tablet Samsung Galaxy Tab A7",
    preco: 1199.00,
    descricao: "Tela de 10.4”, bateria de longa duração.",
    foto: "https://via.placeholder.com/150?text=Galaxy+Tab+A7",
    categoria: "Eletrônicos",
    subcategoria: "Tablets"
  },
  {
    id: "ax01oq408",
    nome: "Câmera GoPro Hero 11 Black",
    preco: 2599.00,
    descricao: "Vídeo 5.3K, estabilização, à prova d’água.",
    foto: "https://via.placeholder.com/150?text=GoPro+Hero+11",
    categoria: "Eletrônicos",
    subcategoria: "Câmeras"
  },
  {
    id: "ay12pr519",
    nome: "Echo Dot 5ª Geração com Alexa",
    preco: 379.00,
    descricao: "Controle por voz, integração com dispositivos smart.",
    foto: "https://via.placeholder.com/150?text=Echo+Dot+5",
    categoria: "Smart Home",
    subcategoria: "Assistentes Virtuais"
  },
  {
    id: "az23qs620",
    nome: "Lâmpada Inteligente Positivo Wi-Fi RGB",
    preco: 89.00,
    descricao: "Controle por app ou Alexa, multicolorida.",
    foto: "https://via.placeholder.com/150?text=Lampada+Inteligente",
    categoria: "Smart Home",
    subcategoria: "Iluminação"
  },
  {
    id: "ba34rt731",
    nome: "Aspirador Robô WAP Robot W100",
    preco: 899.00,
    descricao: "Limpeza automática, sensores antiqueda.",
    foto: "https://via.placeholder.com/150?text=WAP+Robot+W100",
    categoria: "Eletrodomésticos",
    subcategoria: "Limpeza"
  },
  {
    id: "bb45su842",
    nome: "Liquidificador Oster Super Chef",
    preco: 229.00,
    descricao: "Motor potente, 15 velocidades, copo resistente.",
    foto: "https://via.placeholder.com/150?text=Liquidificador+Oster",
    categoria: "Eletrodomésticos",
    subcategoria: "Cozinha"
  },
  {
    id: "bc56tv953",
    nome: "Cafeteira Expresso Nespresso Inissia",
    preco: 499.00,
    descricao: "Compacta, design moderno, 19 bar de pressão.",
    foto: "https://via.placeholder.com/150?text=Nespresso+Inissia",
    categoria: "Eletrodomésticos",
    subcategoria: "Cafeteiras"
  },
  {
    id: "bd67uw064",
    nome: "Console Xbox Series S 512GB",
    preco: 2699.00,
    descricao: "Desempenho next-gen, digital, design compacto.",
    foto: "https://via.placeholder.com/150?text=Xbox+Series+S",
    categoria: "Games",
    subcategoria: "Consoles"
  },
  {
    id: "be78vx175",
    nome: "Controle DualSense PS5 Branco",
    preco: 449.00,
    descricao: "Feedback háptico, gatilhos adaptáveis.",
    foto: "https://via.placeholder.com/150?text=DualSense+PS5",
    categoria: "Games",
    subcategoria: "Acessórios"
  },
  {
    id: "bf89wy286",
    nome: "Jogo FIFA 24 PS5",
    preco: 349.00,
    descricao: "Nova geração, jogabilidade realista.",
    foto: "https://via.placeholder.com/150?text=FIFA+24+PS5",
    categoria: "Games",
    subcategoria: "Jogos"
  },
  {
    id: "bg90xz397",
    nome: "Volante Logitech G29 Driving Force",
    preco: 1999.00,
    descricao: "Compatível com PS5, PS4, PC, experiência realista.",
    foto: "https://via.placeholder.com/150?text=Logitech+G29",
    categoria: "Games",
    subcategoria: "Acessórios"
  },
  {
    id: "bh01ya408",
    nome: "Placa de Vídeo RTX 3060 12GB",
    preco: 2299.00,
    descricao: "Desempenho excelente para jogos e criação.",
    foto: "https://via.placeholder.com/150?text=RTX+3060",
    categoria: "Informática",
    subcategoria: "Placas de Vídeo"
  },
  {
    id: "bi12zb519",
    nome: "Notebook Dell Inspiron i15",
    preco: 3899.00,
    descricao: "Intel i5, 8GB RAM, SSD 256GB, tela Full HD.",
    foto: "https://via.placeholder.com/150?text=Notebook+Dell+Inspiron",
    categoria: "Informática",
    subcategoria: "Notebooks"
  },
  {
    id: "bj23ac620",
    nome: "Monitor LG 24'' Full HD IPS",
    preco: 899.00,
    descricao: "Display antirreflexo, HDMI/VGA, cores vivas.",
    foto: "as3m412lk3m4k23n4.jpeg",
    categoria: "Informática",
    subcategoria: "Monitores"
  },
  {
    id: "bk34bd731",
    nome: "Teclado Mecânico Redragon Kumara",
    preco: 249.00,
    descricao: "Switch Outemu Blue, iluminação RGB.",
    foto: "teclado-mecanico-gamer-redragon-kumara-rgb-switch-outemu-red-abnt2-branco-k552w-rgb-pt-red-_1687275189_g.webp",
    categoria: "Informática",
    subcategoria: "Periféricos"
  },
  {
    id: "bl45ce842",
    nome: "Mouse Logitech MX Master 3S",
    preco: 499.00,
    descricao: "Ergonômico, silencioso, ótimo para produtividade.",
    foto: "dnmasidhaihiq13234.jpeg",
    categoria: "Informática",
    subcategoria: "Periféricos"
  },
  {
    id: "bm56df953",
    nome: "Roteador TP-Link Archer AX12 Wi-Fi 6",
    preco: 689.00,
    descricao: "Alta velocidade e alcance, ideal para casas grandes.",
    foto: "sdasdasdasdasdsdasdiy1i2h3jejriwc.jpg",
    categoria: "Informática",
    subcategoria: "Redes"
  },
  {
    id: "bn67eg064",
    nome: "HD Externo Seagate 2TB USB 3.0",
    preco: 429.00,
    descricao: "Portátil, compatível com Windows e Mac.",
    foto: "https://via.placeholder.com/150?text=Seagate+2TB",
    categoria: "Informática",
    subcategoria: "Armazenamento"
  },
  {
    id: "bo78fh175",
    nome: "SSD Kingston NV2 1TB NVMe",
    preco: 399.00,
    descricao: "Alta velocidade de leitura e gravação.",
    foto: "https://via.placeholder.com/150?text=Kingston+NV2+1TB",
    categoria: "Informática",
    subcategoria: "Armazenamento"
  },
  {
    id: "bp89gi286",
    nome: "Memória RAM Corsair Vengeance 16GB DDR4",
    preco: 379.00,
    descricao: "Alta performance para gamers e profissionais.",
    foto: "https://via.placeholder.com/150?text=Vengeance+16GB",
    categoria: "Informática",
    subcategoria: "Memória RAM"
  },
  {
    id: "bq90hj397",
    nome: "Fonte Corsair 650W 80 Plus Bronze",
    preco: 459.00,
    descricao: "Eficiência energética, ideal para PC Gamer.",
    foto: "https://via.placeholder.com/150?text=Fonte+Corsair+650W",
    categoria: "Informática",
    subcategoria: "Fontes"
  },
  {
    id: "br01ik408",
    nome: "Gabinete Gamer RGB Mid Tower",
    preco: 379.00,
    descricao: "Painel em vidro, espaço para refrigeração líquida.",
    foto: "https://via.placeholder.com/150?text=Gabinete+Gamer+RGB",
    categoria: "Informática",
    subcategoria: "Gabinetes"
  },
  {
    id: "bs12jl519",
    nome: "Placa de Vídeo NVIDIA RTX 4060 8GB",
    preco: 1999.00,
    descricao: "Desempenho incrível para jogos e criação de conteúdo.",
    foto: "https://via.placeholder.com/150?text=RTX+4060",
    categoria: "Informática",
    subcategoria: "Placas de Vídeo"
  },
  {
    id: "bt23km620",
    nome: "Processador AMD Ryzen 5 5600X",
    preco: 1099.00,
    descricao: "6 núcleos, ótimo para multitarefas e jogos.",
    foto: "https://via.placeholder.com/150?text=Ryzen+5+5600X",
    categoria: "Informática",
    subcategoria: "Processadores"
  },
  {
    id: "bu34ln731",
    nome: "Cooler Master Hyper 212 Black Edition",
    preco: 299.00,
    descricao: "Refrigeração eficaz e silenciosa para CPU.",
    foto: "https://via.placeholder.com/150?text=Cooler+Master+212",
    categoria: "Informática",
    subcategoria: "Coolers"
  },
  {
    id: "bv45mo842",
    nome: "Webcam Logitech C920 HD Pro",
    preco: 499.00,
    descricao: "Transmissão em Full HD com ótima qualidade de áudio.",
    foto: "https://via.placeholder.com/150?text=Logitech+C920",
    categoria: "Informática",
    subcategoria: "Periféricos"
  },
  {
    id: "bw56np953",
    nome: "Impressora Multifuncional Epson Ecotank",
    preco: 1149.00,
    descricao: "Alta economia de tinta e multifuncionalidade.",
    foto: "https://via.placeholder.com/150?text=Epson+Ecotank",
    categoria: "Informática",
    subcategoria: "Impressoras"
  },
  {
    id: "bx67oq064",
    nome: "Cadeira Gamer ThunderX3",
    preco: 1249.00,
    descricao: "Conforto e estilo para longas sessões de uso.",
    foto: "https://via.placeholder.com/150?text=Cadeira+Gamer",
    categoria: "Informática",
    subcategoria: "Cadeiras"
  },
  {
    id: "by78pr175",
    nome: "Estabilizador SMS Revolution Speedy 300VA",
    preco: 149.00,
    descricao: "Proteção para equipamentos contra oscilações elétricas.",
    foto: "https://via.placeholder.com/150?text=Estabilizador+SMS",
    categoria: "Informática",
    subcategoria: "Energia"
  },
  {
    id: "bz89qs286",
    nome: "Tablet Samsung Galaxy Tab S6 Lite",
    preco: 1799.00,
    descricao: "Tela de 10.4'', S Pen inclusa, ideal para estudos.",
    foto: "https://via.placeholder.com/150?text=Galaxy+Tab+S6+Lite",
    categoria: "Informática",
    subcategoria: "Tablets"
  },
  {
    id: "ca90rt397",
    nome: "Kindle Paperwhite 11ª Geração",
    preco: 729.00,
    descricao: "Tela antirreflexo, resistência à água, iluminação ajustável.",
    foto: "https://via.placeholder.com/150?text=Kindle+Paperwhite",
    categoria: "Informática",
    subcategoria: "Leitores Digitais"
  },
  {
    id: "cb01su408",
    nome: "Câmera Logitech StreamCam Full HD",
    preco: 899.00,
    descricao: "Ideal para streamers e criadores de conteúdo.",
    foto: "https://via.placeholder.com/150?text=Logitech+StreamCam",
    categoria: "Informática",
    subcategoria: "Câmeras"
  }


];



