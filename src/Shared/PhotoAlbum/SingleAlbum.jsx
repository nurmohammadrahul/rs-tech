// AlbumPage.js
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import gallery1 from "../../assets/rs-tech-asset/gallery-1.jpg"
import gallery2 from "../../assets/rs-tech-asset/gallery-2.jpg"
import gallery3 from "../../assets/rs-tech-asset/gallery-3.jpg"
import gallery4 from "../../assets/rs-tech-asset/gallery-4.jpg"
import gallery5 from "../../assets/rs-tech-asset/gallery-5.jpg"
import gallery6 from "../../assets/rs-tech-asset/gallery-6.jpg"
import gallery7 from "../../assets/rs-tech-asset/gallery-7.jpg"
import gallery8 from "../../assets/rs-tech-asset/gallery-8.jpg"
import CommonHero from '../CommonHero';

const SingleAlbum = () => {
    const { id } = useParams();

    const albums = [
        {
            id: 1,
            title: "1",
            images: [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8,],
            description: "Our corporate events showcase professional gatherings with elegant setups."

        }
    ];

    const album = albums.find(a => a.id === parseInt(id)) || albums[0];

    return (
        <div>
            <CommonHero title="photo gallery" />
            <section className="py-4 md:px-24 lg:px-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >

                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {album.images.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    {/* Consistent image hover effect */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                        className="relative overflow-hidden h-64"
                                    >
                                        <img
                                            src={image}
                                            alt={`${album.title} ${index + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Same overlay effect */}
                                        <div className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-black before:rounded-full before:opacity-0 before:transition-all before:duration-700 group-hover:before:opacity-50 group-hover:before:scale-200 before:scale-0 before:origin-center mix-blend-overlay"></div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingleAlbum;