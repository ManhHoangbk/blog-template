import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import Image from "next/image";
import React from "react";
import ContentHome from "../../components/content-home";
import ArrowDownIcon from "../../components/Icon/ArrowDown";
import Layout from "../../components/layout";
import { IPost } from "../../models/Post";
import { convertToJSONObject } from "../../utils";
import { readAllPost } from "../../utils/FileUtils";
import styles from "./Index.module.scss";

const Page = ({ posts }: { posts: IPost[] }) => {
    return (
        <Layout title={""} description={""}>
            <div className={styles.homepage}>
                <Container maxWidth="lg">
                    <div className={styles.homepageContainer}>
                        <div className={styles.left}>
                            <div className={styles.title}>
                                Worksheet Zone Blog
                            </div>
                            <div className={styles.text}>
                                Everything you Need to Know to Get Better on
                                your Learning Progress
                            </div>
                        </div>
                        <div className={styles.right}>
                            <Image
                                alt="mail-icon"
                                src="/images/banner-home.png"
                                width="300"
                                height="300"
                            />
                        </div>
                    </div>
                    <div>
                        <ContentHome posts={posts} />
                    </div>
                    <div className={styles.btnSeemore}>
                        <Button>
                            See more
                            <ArrowDownIcon />
                        </Button>
                    </div>
                </Container>
            </div>
            {/* <Page>
        <Pagination
            prevPagePath={prevPagePath}
            nextPagePath={nextPagePath}
            hasPrevPage={hasPrevPage}
            hasNextPage={hasNextPage}
        />
    </Page> */}
        </Layout>
    );
    // return <div>{ReactHtmlParser(contentHTML)}</div>;
};

export const getStaticProps = async (context: any) => {
    let posts = await readAllPost();
    // let appInfo = getAppInfo(appNameId);
    // let listPractice = await getListTopicAPI(appInfo.appId);

    // let tests: ITestInfo[] = [];
    // if (!appInfo.hasState) {
    //     tests = await getListTestApi(appInfo.appId);
    // }
    // let footerContent = readFooterMenusData();
    // let homeSeoContent = await getHomeSeoContentApi(
    //     getAppNameFromAppNameId(appInfo.appNameId) + "-home-seo-content"
    // );
    return convertToJSONObject({
        props: {
            posts: posts,
        },
    });
};

export default Page;
