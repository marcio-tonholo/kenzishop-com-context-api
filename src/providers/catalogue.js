import { createContext } from "react";
export const CatalogueContext = createContext([]);

export const CatalogueProvider = ({ children }) => {
  const catalogue = [
    {
      id: 11,
      title: "Tênis Air Jordan I High OG Unissex",
      description:
        "Processador Snapdragon 439 Octa-Core de 2GHz com 2GB de RAM.",
      price: 699.99,
      image:
        "https://images.lojanike.com.br/500x500/produto/tenis-air-jordan-i-high-og-unissex-555088-501-1.png",
    },
    {
      id: 12,
      title: "Tênis Nike Air Jordan I Mid Unissex",
      description:
        "Processador MediaTek Helio G25 Octa-Core de 2GHz com 2GB de RAM.",
      price: 799.99,
      image:
        "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-jordan-i-mid-unissex-554724-054-1.png",
    },
    {
      id: 13,
      title: "Tênis Nike Air Jordan I Mid Unissex",
      description:
        "Processador MediaTek Helio G25 Octa-Core de 2GHz com 2GB de RAM.",
      price: 859.1,
      image:
        "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-jordan-i-mid-unissex-554724-051-1.png",
    },
    {
      id: 45,
      title: "Tênis Nike Air Jordan I Mid Unissex",
      description:
        "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
      price: 899.99,
      image:
        "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-jordan-i-mid-unissex-554724-605-1.png",
    },
    {
      id: 46,
      title: "Tênis Air Jordan XXXII Ghost CNY Masculino",
      description:
        "Oferece o display Infinito de 6.4 polegadas do Galaxy M31 permite que você veja muito mais do que ama.",
      price: 899.99,
      image:
        "https://images.lojanike.com.br/1024x1024/produto/tenis-air-jordan-xxxii-ghost-cny-masculino-AJ6331-042-1.png",
    },
    {
      id: 47,
      title: "Tênis Air Jordan I Mid Edição Especial Masculino",
      description:
        "As funcionalidades do Smartphone Samsung Galaxy A51 estão mais avançadas que nunca!",
      price: 999.99,
      image:
        "https://images.lojanike.com.br/1024x1024/produto/tenis-air-jordan-i-mid-edicao-especial-masculino-852542-800-1.png",
    },
    {
      id: 48,
      title: "Tênis Air Jordan 12 Retro Masculino ",
      description:
        "O Smartphone Samsung Galaxy S20 Fe é completo e perfeito para você que não abre mão de ter um item tecnológico sempre por perto.",
      price: 499.99,
      image:
        "https://images.lojanike.com.br/500x500/produto/tenis-air-jordan-12-retro-masculino-130690-017-1.png",
    },
    {
      id: 49,
      title: "Tênis Air Jordan I Low Unissex ",
      description:
        "iPhone 12 Pro Max. Tela Super Retina XDR maior com 6,7 polegadas.",
      price: 999.99,
      image:
        "https://images.lojanike.com.br/860x860/produto/tenis-air-jordan-i-low-unissex-553558-026-1.png",
    },
    {
      id: 50,
      title: "Tênis Air Jordan XXXIII SE Masculino",
      description: "Monitor Samsung Widescreen",
      price: 859.99,
      image:
        "https://images.lojanike.com.br/500x500/produto/tenis-air-jordan-xxxiii-se-masculino-CD9560-401-1.png",
    },
  ];

  return (
    <CatalogueContext.Provider value={{ catalogue }}>
      {children}
    </CatalogueContext.Provider>
  );
};
