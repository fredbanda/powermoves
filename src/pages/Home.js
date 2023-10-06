/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { collection, deleteDoc, onSnapshot, doc, where, query, getDocs, orderBy } from "firebase/firestore";
import "../App.css";
import { db } from "../firebase";
import BlogSection from "../componets/BlogSection";
import Spinner from "../componets/Spinner";
import { toast } from "react-toastify";
import Tags from "../componets/Tags";
import MostPopular from "../componets/MostPopular";
import Trending from "../componets/Trending";
import Search from "../componets/Search";
import { isEmpty } from "lodash";
import HeroSection from "../componets/HeroSection";

const Home = ({ setActive, user }) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState("");
  const [trendingBlogs, setTrendingBlogs] = useState([]);

  const getTrendingBlogs = async () => {
    const blogRef = collection(db, "blogs");
    const trendQuery= query(blogRef, where("trending", "==", "yes"));
    const querySnapshot = await getDocs(trendQuery);
    let trendingBlogs = [];
    querySnapshot.forEach((doc) => {
      trendingBlogs.push({ id: doc.id, ...doc.data() });
    });
    setTrendingBlogs(trendingBlogs);
  }

  useEffect(() => {
    getTrendingBlogs();
    const unsub = onSnapshot(
      collection(db, "blogs"),
      (snapshot) => {
        let list = [];
        let tags = [];
        snapshot.docs.forEach((doc) => {
          tags.push(...doc.get("tags"));
          list.push({ id: doc.id, ...doc.data() });
        });
        const uniqueTags = [...new Set(tags)];
        setTags(uniqueTags);
        setBlogs(list);
        setLoading(false);
        setActive("home");
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
      getTrendingBlogs();
    };
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "blogs", id));
        toast.success("Post deleted successfully");
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getBlogs = async() => {
    const blogRef = collection(db, "blogs");
    const blogsQuery = query(blogRef, orderBy("title"))
    const docSnapshot = await getDocs(blogsQuery);
    setBlogs(docSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  }

  const handleChange = (e) => {
    const {value} = e.target
    if(isEmpty(value)){
      getBlogs();
    }
    setSearch()
  };

  return (
    <div className="container-fluid pb-4 pt-4 padding">
      <div className="container padding">
        <div className="row mx-0">
          <HeroSection />
        <Trending blogs={trendingBlogs} />
          <div className="col-md-8">
            <BlogSection
              blogs={blogs}
              user={user}
              handleDelete={handleDelete}
            />
          </div>
          <div className="col-md-3">
            <Search search={search} handleChange={handleChange} />
          <Tags tags={tags} />
            <MostPopular blogs={blogs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
