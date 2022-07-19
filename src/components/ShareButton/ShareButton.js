import React from 'react';
import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
  } from "react-share";

  import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
  } from "react-share";

  import "./style.css"


const ShareButton = ({shareUrl='https://github.com', title='GitHub', handleClose}) => {

    return (
      <div className="share__container" >
        <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="share-button"
            onClick={handleClose}
          >
            <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
            url={shareUrl}
            quote={title}
            className="share-button"
            onClick={handleClose}
        >
            <TwitterIcon size={32} round/>
        </TwitterShareButton>
        <WhatsappShareButton
            url={shareUrl}
            quote={title}
            className="share-button"
            onClick={handleClose}
        >
            <WhatsappIcon size={32} round/>
        </WhatsappShareButton>
        <EmailShareButton
            url={shareUrl}
            quote={title}
            className="share-button"
            onClick={handleClose}
        >
            <EmailIcon size={32} round/>
        </EmailShareButton>
        <LinkedinShareButton
            url={shareUrl}
            quote={title}
            className="share-button"
            onClick={handleClose}
        >
            <LinkedinIcon size={32} round/>
        </LinkedinShareButton>
      </div>
    );
}

export default ShareButton;