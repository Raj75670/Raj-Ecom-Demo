import React from 'react';

interface ProductGridProps {
    selectedFilters: string[];
    searchQuery: string;
    sortOption: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ selectedFilters, searchQuery, sortOption }) => {
    // Filter products based on selectedFilters and searchQuery
    const filteredProducts = products.filter(product =>
        (selectedFilters.length === 0 || selectedFilters.includes(product.category) || selectedFilters.includes(product.rating)) &&
        (searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // Sorting logic
    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sortOption === 'lowprice') {
            return parseInt(a.price.replace('₹ ', '')) - parseInt(b.price.replace('₹ ', ''));
        } else if (sortOption === 'highprice') {
            return parseInt(b.price.replace('₹ ', '')) - parseInt(a.price.replace('₹ ', ''));
        }
        return 0;
    });

    return (
        <div className={`${sortedProducts.length > 0 ? 'grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 py-[1.5rem]' : 'flex items-center justify-center min-h-[50%]'}`}>
            {sortedProducts.length > 0 ? sortedProducts.map((product) => (
                <div key={product.id} className="rounded-lg overflow-hidden">
                    <img src={product.imageUrl} alt={product.name} className="w-full h-[250px] md:h-[350px] object-cover cursor-pointer" />
                    <div className="py-[1rem]">
                        <p className="font-bold text-base uppercase text-[#252020] mb-[0.5rem] line-clamp-1 cursor-pointer">{product.name}</p>
                        <p className="font-extrabold text-lg text-[#252020]">{product.price}</p>
                    </div>
                </div>
            )) :
                <div className="flex items-center flex-col justify-center min-h-[50%]">
                    <img src='/images/No-data.jpg' alt='No data' />
                    <p className="text-xl font-semibold text-center">
                        We do not have any products matching your filters. Try clearing a few filters or view all products.
                    </p>
                </div>
            }
        </div>
    );
}

export default ProductGrid;

const products = [
    { id: 1, name: 'Rug Patch Leather Tote Bag', rating: '5', sort: 'highprice', price: '₹ 3800', category: 'leather', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/clutch/v/0/7/-original-imagzy3caztpxepm.jpeg' },
    { id: 2, name: 'Hand Embroidered Vegan Leather Round Sling Bag', rating: '4', sort: 'lowprice', price: '₹ 4000', category: 'normal', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/clutch/s/t/1/-original-imagz49eme6fzshz.jpeg' },
    { id: 3, name: 'Leather and Woven Crossbody Bag with Clasp', rating: '3', sort: 'highprice', price: '₹ 2500', category: 'fancy', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/clutch/v/x/i/purses-for-women-stylish-latest-k8-peach-100923-clutch-altair-original-imahyjzb5kggvzxt.jpeg' },
    { id: 4, name: 'Leather Bottle Case', rating: '5', sort: 'highprice', price: '₹ 9000', category: 'leather', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/q/w/h/-original-imagvte3artgyx3f.jpeg' },
    { id: 5, name: 'Watermelon Jute Handbag', rating: '1', sort: 'lowprice', price: '₹ 2100', category: 'normal', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/clutch/z/x/y/two-fold-hand-party-clutches-clutch-1-women-hand-clutches-ladies-original-imahy9j8ddsrrf2u.jpeg' },
    { id: 6, name: 'Macrame Sling Bag Metallic Cream', rating: '2', sort: 'lowprice', price: '₹ 2500', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/g/z/b/-original-imah3hynuw2ku2pv.jpeg' },
    { id: 7, name: 'Upcycled Plastic Laptop Sleeve with Digital Print', rating: '5', sort: 'highprice', price: '₹ 4200', category: 'leather', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/clutch/t/z/5/casual-multicolor-clutch-wallet-for-women-stylish-latest-pu-original-imahfvdedqrvkfrz.jpeg' },
    { id: 8, name: 'Embroidered Leather Sling Bag', rating: '1', sort: 'highprice', price: '₹ 5000', category: 'fancy', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/clutch/j/y/l/two-fold-hand-clutches-very-attractive-look-women-stylish-latest-original-imagjfvmvfppk6e5.jpeg' },
    { id: 9, name: 'Jute & Vegan Leather Sling Bag Worn Off White', sort: 'lowprice', rating: '5', price: '₹ 2000', category: 'normal', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/l4fxh8w0/clutch/o/h/v/two-fold-hand-clutches-very-attractive-look-women-stylish-latest-original-imagfcj4gydvphbg.jpeg' },
    { id: 10, name: 'Rug Patch Leather Tote Bag', rating: '1', sort: 'lowprice', price: '₹ 3800', category: 'leather', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/clutch/v/0/7/-original-imagzy3caztpxepm.jpeg' },
    { id: 11, name: 'Hand Embroidered Vegan Leather Round Sling Bag', rating: '5', sort: 'highprice', price: '₹ 4000', category: 'fancy', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/clutch/s/t/1/-original-imagz49eme6fzshz.jpeg' },
    { id: 12, name: 'Leather and Woven Crossbody Bag with Clasp', sort: 'lowprice', rating: '4', price: '₹ 2500', category: 'normal', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/clutch/v/x/i/purses-for-women-stylish-latest-k8-peach-100923-clutch-altair-original-imahyjzb5kggvzxt.jpeg' },
    { id: 13, name: 'Leather Bottle Case', rating: '4', sort: 'highprice', price: '₹ 9000', category: 'leather', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/q/w/h/-original-imagvte3artgyx3f.jpeg' },
    { id: 14, name: 'Watermelon Jute Handbag', rating: '4', sort: 'lowprice', price: '₹ 2100', category: 'fancy', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/clutch/z/x/y/two-fold-hand-party-clutches-clutch-1-women-hand-clutches-ladies-original-imahy9j8ddsrrf2u.jpeg' },
    { id: 15, name: 'Macrame Sling Bag Metallic Cream', rating: '3', sort: 'lowprice', price: '₹ 2500', category: 'normal', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/wallet-card-wallet/g/z/b/-original-imah3hynuw2ku2pv.jpeg' },
    { id: 16, name: 'Upcycled Plastic Laptop Sleeve with Digital Print', rating: '2', sort: 'highprice', price: '₹ 4200', category: 'leather', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/clutch/t/z/5/casual-multicolor-clutch-wallet-for-women-stylish-latest-pu-original-imahfvdedqrvkfrz.jpeg' },
    { id: 17, name: 'Embroidered Leather Sling Bag', rating: '1', sort: 'highprice', price: '₹ 5000', category: 'leather', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/clutch/j/y/l/two-fold-hand-clutches-very-attractive-look-women-stylish-latest-original-imagjfvmvfppk6e5.jpeg' },
    { id: 18, name: 'Jute & Vegan Leather Sling Bag Worn Off White', rating: '3', sort: 'lowprice', price: '₹ 2000', category: 'normal', imageUrl: 'https://rukminim2.flixcart.com/image/612/612/l4fxh8w0/clutch/o/h/v/two-fold-hand-clutches-very-attractive-look-women-stylish-latest-original-imagfcj4gydvphbg.jpeg' },
];