import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import SearchActions from '../Redux/SearchRedux';

import api from '../Services/Api';
import Svg, {Path, Rect} from 'react-native-svg';
import {TextInput} from '../Components';
import {useDispatch} from 'react-redux';
import Loader from '../Components/Loader';
// import {Icon} from '../Images/Icons';
function LaunchScreen(props) {
  const dispatch = useDispatch();
  const [emailAddress, setemailAddress] = useState('');
  const [password, setpassword] = useState('');
  useEffect(() => {}, []);

  //Bearer 194|BHOmvGpU8zXcvq9L6ENwuCK3pwOCaOV49WnSLlI1
  const onPressSignIn = () => {
    props.navigation.navigate('HomeScreen');
    // alert(emailAddress + password);
    // let payload = {email: emailAddress, password: password,user_type:'seller'};
    // dispatch(SearchActions.loginRequest(payload));
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 164 40"
          width={responsiveFontSize(20)}
          height={responsiveFontSize(20)}
          color={'red'}>
          <Path
            d="M60.03 31C59.0593 31 58.366 30.8093 57.95 30.428C57.534 30.0467 57.326 29.5007 57.326 28.79C57.326 28.4433 57.352 27.854 57.404 27.022C57.456 26.1727 57.5253 25.2107 57.612 24.136C57.6987 23.0613 57.7853 21.926 57.872 20.73C57.9587 19.534 58.0453 18.4073 58.132 17.35C58.2187 16.2927 58.288 15.3653 58.34 14.568C58.392 13.7707 58.418 13.2247 58.418 12.93C58.418 12.67 58.5567 12.54 58.834 12.54H67.986C68.09 12.54 68.1853 12.566 68.272 12.618C68.3587 12.67 68.402 12.7653 68.402 12.904L68.298 14.438C68.2633 14.958 68.116 15.3827 67.856 15.712C67.6133 16.024 67.102 16.18 66.322 16.18H62.734L62.474 19.846H66.166C66.27 19.846 66.3653 19.872 66.452 19.924C66.5387 19.976 66.582 20.0713 66.582 20.21L66.478 21.744C66.4433 22.264 66.296 22.6887 66.036 23.018C65.7933 23.33 65.282 23.486 64.502 23.486H62.24L61.954 27.36H67.674C67.778 27.36 67.8733 27.3947 67.96 27.464C68.0467 27.516 68.09 27.6027 68.09 27.724L67.986 29.258C67.9513 29.778 67.804 30.2027 67.544 30.532C67.3013 30.844 66.79 31 66.01 31H60.03ZM75.9717 31.26C75.2957 31.26 74.6457 31.1387 74.0217 30.896C73.415 30.6533 72.8777 30.272 72.4097 29.752C71.959 29.232 71.595 28.5733 71.3177 27.776C71.0577 26.9787 70.9277 26.0167 70.9277 24.89C70.9277 24.3873 70.9623 23.8327 71.0317 23.226C71.101 22.602 71.2223 21.978 71.3957 21.354C71.569 20.73 71.8117 20.1233 72.1237 19.534C72.4357 18.9447 72.8257 18.4247 73.2937 17.974C73.779 17.506 74.351 17.1333 75.0097 16.856C75.6857 16.5787 76.4743 16.44 77.3757 16.44C78.2423 16.44 78.9357 16.596 79.4557 16.908C79.993 17.2027 80.331 17.7227 80.4697 18.468C80.5043 17.792 80.539 17.2027 80.5737 16.7C80.6083 16.1973 80.6343 15.7293 80.6517 15.296C80.6863 14.8627 80.721 14.4293 80.7557 13.996C80.7903 13.5627 80.825 13.0687 80.8597 12.514C80.877 12.1327 80.9203 11.9073 80.9897 11.838C81.0243 11.8033 81.0677 11.786 81.1197 11.786C81.1717 11.7687 81.267 11.76 81.4057 11.76H82.4197C82.9397 11.76 83.373 11.8207 83.7197 11.942C84.0663 12.0633 84.3437 12.228 84.5517 12.436C84.7597 12.644 84.907 12.8867 84.9937 13.164C85.0803 13.424 85.1237 13.7013 85.1237 13.996C85.1237 13.996 85.1063 14.2127 85.0717 14.646C85.037 15.0793 84.9937 15.66 84.9417 16.388C84.8897 17.0987 84.829 17.9133 84.7597 18.832C84.6903 19.7507 84.621 20.704 84.5517 21.692C84.4823 22.6627 84.413 23.6333 84.3437 24.604C84.2743 25.5573 84.205 26.4413 84.1357 27.256C84.0663 28.0533 84.0057 28.7467 83.9537 29.336C83.919 29.908 83.893 30.2893 83.8757 30.48C83.841 30.688 83.7977 30.8267 83.7457 30.896C83.6937 30.9653 83.5463 31 83.3037 31H82.3677C82.0037 31 81.657 30.974 81.3277 30.922C81.0157 30.8527 80.7383 30.7487 80.4957 30.61C80.2703 30.454 80.0883 30.2547 79.9497 30.012C79.8283 29.752 79.7677 29.4227 79.7677 29.024C79.4557 29.6827 78.979 30.22 78.3377 30.636C77.7137 31.052 76.925 31.26 75.9717 31.26ZM78.2337 19.898C77.3497 19.898 76.691 20.288 76.2577 21.068C75.8417 21.8307 75.6337 22.862 75.6337 24.162C75.6337 24.6127 75.6597 25.0547 75.7117 25.488C75.781 25.9213 75.8937 26.3113 76.0497 26.658C76.2057 27.0047 76.4137 27.282 76.6737 27.49C76.951 27.698 77.2977 27.802 77.7137 27.802C78.459 27.802 79.083 27.438 79.5857 26.71C80.0883 25.982 80.3397 24.838 80.3397 23.278C80.3397 22.8447 80.3137 22.4287 80.2617 22.03C80.2097 21.614 80.1057 21.25 79.9497 20.938C79.7937 20.626 79.577 20.3747 79.2997 20.184C79.0223 19.9933 78.667 19.898 78.2337 19.898ZM93.298 18.91C93.298 19.274 93.2633 19.7853 93.194 20.444C93.142 21.1027 93.0813 21.7873 93.012 22.498C92.96 23.2087 92.8993 23.876 92.83 24.5C92.778 25.124 92.752 25.5747 92.752 25.852C92.752 26.4587 92.8993 26.9353 93.194 27.282C93.506 27.6113 93.9307 27.776 94.468 27.776C94.936 27.776 95.326 27.594 95.638 27.23C95.9673 26.8487 96.2273 26.3633 96.418 25.774C96.626 25.1673 96.7907 24.4827 96.912 23.72C97.0333 22.9573 97.12 22.186 97.172 21.406C97.2413 20.626 97.2933 19.872 97.328 19.144C97.38 18.3987 97.432 17.7573 97.484 17.22C97.5013 17.0813 97.5533 16.96 97.64 16.856C97.7267 16.752 97.8653 16.7 98.056 16.7H98.992C99.5294 16.7 99.9627 16.7607 100.292 16.882C100.639 16.986 100.907 17.142 101.098 17.35C101.306 17.558 101.445 17.818 101.514 18.13C101.601 18.4247 101.644 18.7713 101.644 19.17C101.644 19.43 101.627 19.8027 101.592 20.288C101.575 20.756 101.531 21.4147 101.462 22.264C101.393 23.096 101.306 24.162 101.202 25.462C101.115 26.7447 101.003 28.3393 100.864 30.246C100.829 30.61 100.786 30.8267 100.734 30.896C100.699 30.9653 100.561 31 100.318 31H99.304C98.784 31 98.3507 30.9393 98.004 30.818C97.6747 30.6967 97.406 30.5407 97.198 30.35C96.99 30.1593 96.8427 29.934 96.756 29.674C96.6693 29.414 96.6173 29.1453 96.6 28.868C96.34 29.3187 96.0453 29.7 95.716 30.012C95.404 30.324 95.0747 30.5753 94.728 30.766C94.3813 30.9393 94.026 31.0607 93.662 31.13C93.298 31.2167 92.9427 31.26 92.596 31.26C91.9373 31.26 91.348 31.156 90.828 30.948C90.308 30.7227 89.866 30.428 89.502 30.064C89.1553 29.7 88.8867 29.2667 88.696 28.764C88.5053 28.2613 88.41 27.724 88.41 27.152C88.41 26.9267 88.4187 26.5627 88.436 26.06C88.4707 25.54 88.5053 24.9593 88.54 24.318C88.592 23.6767 88.644 23.0007 88.696 22.29C88.748 21.562 88.7913 20.8773 88.826 20.236C88.878 19.5947 88.9213 19.0313 88.956 18.546C89.008 18.0607 89.0427 17.714 89.06 17.506C89.0947 17.194 89.164 16.986 89.268 16.882C89.372 16.7607 89.5453 16.7 89.788 16.7H90.62C91.1573 16.7 91.5993 16.752 91.946 16.856C92.2927 16.96 92.5613 17.1073 92.752 17.298C92.96 17.4887 93.0987 17.7227 93.168 18C93.2547 18.26 93.298 18.5633 93.298 18.91Z"
            fill="#427DAA"
          />
          <Path
            d="M117.026 31C116.125 31 115.475 30.818 115.076 30.454C114.695 30.0727 114.487 29.6047 114.452 29.05C114.261 29.6393 113.854 30.1593 113.23 30.61C112.623 31.0433 111.739 31.26 110.578 31.26C109.902 31.26 109.243 31.13 108.602 30.87C107.961 30.5927 107.389 30.142 106.886 29.518C106.383 28.894 105.976 28.062 105.664 27.022C105.369 25.982 105.222 24.6907 105.222 23.148C105.222 22.5587 105.257 21.8827 105.326 21.12C105.395 20.34 105.534 19.5513 105.742 18.754C105.967 17.9393 106.279 17.1507 106.678 16.388C107.094 15.608 107.631 14.9147 108.29 14.308C108.966 13.7013 109.789 13.216 110.76 12.852C111.731 12.4707 112.892 12.28 114.244 12.28C115.128 12.28 115.917 12.3753 116.61 12.566C117.321 12.7567 117.919 13.0253 118.404 13.372C118.907 13.7187 119.288 14.1433 119.548 14.646C119.825 15.1487 119.964 15.712 119.964 16.336C119.964 17.3413 119.635 18.104 118.976 18.624C118.317 19.1267 117.39 19.378 116.194 19.378C115.813 19.378 115.579 19.352 115.492 19.3C115.423 19.2307 115.379 19.1007 115.362 18.91C115.327 18.598 115.301 18.286 115.284 17.974C115.284 17.662 115.241 17.376 115.154 17.116C115.085 16.856 114.955 16.648 114.764 16.492C114.573 16.336 114.27 16.258 113.854 16.258C113.005 16.258 112.329 16.5007 111.826 16.986C111.323 17.4713 110.942 18.0607 110.682 18.754C110.422 19.4473 110.257 20.1667 110.188 20.912C110.119 21.64 110.084 22.2553 110.084 22.758C110.084 23.59 110.136 24.292 110.24 24.864C110.344 25.4187 110.491 25.878 110.682 26.242C110.89 26.5887 111.133 26.84 111.41 26.996C111.687 27.1347 112.008 27.204 112.372 27.204C113.031 27.204 113.585 27.0653 114.036 26.788C114.487 26.5107 114.755 26.008 114.842 25.28L114.998 23.824C115.05 23.3213 115.119 22.914 115.206 22.602C115.293 22.2727 115.501 22.108 115.83 22.108H117.26C117.693 22.108 118.04 22.16 118.3 22.264C118.577 22.3507 118.785 22.5067 118.924 22.732C119.08 22.94 119.184 23.2173 119.236 23.564C119.288 23.9107 119.314 24.3353 119.314 24.838C119.314 25.1847 119.297 25.644 119.262 26.216C119.245 26.788 119.21 27.3687 119.158 27.958C119.123 28.5473 119.08 29.0933 119.028 29.596C118.976 30.0813 118.933 30.4193 118.898 30.61C118.863 30.766 118.82 30.87 118.768 30.922C118.716 30.974 118.612 31 118.456 31H117.026ZM126.117 31C125.146 31 124.453 30.8093 124.037 30.428C123.621 30.0467 123.413 29.5007 123.413 28.79C123.413 28.4433 123.439 27.854 123.491 27.022C123.543 26.1727 123.612 25.2107 123.699 24.136C123.785 23.0613 123.872 21.926 123.959 20.73C124.045 19.534 124.132 18.4073 124.219 17.35C124.305 16.2927 124.375 15.3653 124.427 14.568C124.479 13.7707 124.505 13.2247 124.505 12.93C124.505 12.67 124.643 12.54 124.921 12.54H126.351C127.408 12.54 128.119 12.7653 128.483 13.216C128.847 13.6667 129.029 14.334 129.029 15.218C129.029 15.3047 129.011 15.582 128.977 16.05C128.959 16.518 128.925 17.1073 128.873 17.818C128.821 18.5287 128.76 19.326 128.691 20.21C128.639 21.0767 128.578 21.9693 128.509 22.888C128.457 23.8067 128.396 24.708 128.327 25.592C128.275 26.4587 128.223 27.2473 128.171 27.958C128.119 28.6687 128.075 29.2667 128.041 29.752C128.006 30.22 127.98 30.506 127.963 30.61C127.945 30.7487 127.911 30.8527 127.859 30.922C127.807 30.974 127.703 31 127.547 31H126.117ZM144.433 31C143.531 31 142.881 30.818 142.483 30.454C142.101 30.0727 141.893 29.6047 141.859 29.05C141.668 29.6393 141.261 30.1593 140.637 30.61C140.03 31.0433 139.146 31.26 137.985 31.26C137.309 31.26 136.65 31.13 136.009 30.87C135.367 30.5927 134.795 30.142 134.293 29.518C133.79 28.894 133.383 28.062 133.071 27.022C132.776 25.982 132.629 24.6907 132.629 23.148C132.629 22.5587 132.663 21.8827 132.733 21.12C132.802 20.34 132.941 19.5513 133.149 18.754C133.374 17.9393 133.686 17.1507 134.085 16.388C134.501 15.608 135.038 14.9147 135.697 14.308C136.373 13.7013 137.196 13.216 138.167 12.852C139.137 12.4707 140.299 12.28 141.651 12.28C142.535 12.28 143.323 12.3753 144.017 12.566C144.727 12.7567 145.325 13.0253 145.811 13.372C146.313 13.7187 146.695 14.1433 146.955 14.646C147.232 15.1487 147.371 15.712 147.371 16.336C147.371 17.3413 147.041 18.104 146.383 18.624C145.724 19.1267 144.797 19.378 143.601 19.378C143.219 19.378 142.985 19.352 142.899 19.3C142.829 19.2307 142.786 19.1007 142.769 18.91C142.734 18.598 142.708 18.286 142.691 17.974C142.691 17.662 142.647 17.376 142.561 17.116C142.491 16.856 142.361 16.648 142.171 16.492C141.98 16.336 141.677 16.258 141.261 16.258C140.411 16.258 139.735 16.5007 139.233 16.986C138.73 17.4713 138.349 18.0607 138.089 18.754C137.829 19.4473 137.664 20.1667 137.595 20.912C137.525 21.64 137.491 22.2553 137.491 22.758C137.491 23.59 137.543 24.292 137.647 24.864C137.751 25.4187 137.898 25.878 138.089 26.242C138.297 26.5887 138.539 26.84 138.817 26.996C139.094 27.1347 139.415 27.204 139.779 27.204C140.437 27.204 140.992 27.0653 141.443 26.788C141.893 26.5107 142.162 26.008 142.249 25.28L142.405 23.824C142.457 23.3213 142.526 22.914 142.613 22.602C142.699 22.2727 142.907 22.108 143.237 22.108H144.667C145.1 22.108 145.447 22.16 145.707 22.264C145.984 22.3507 146.192 22.5067 146.331 22.732C146.487 22.94 146.591 23.2173 146.643 23.564C146.695 23.9107 146.721 24.3353 146.721 24.838C146.721 25.1847 146.703 25.644 146.669 26.216C146.651 26.788 146.617 27.3687 146.565 27.958C146.53 28.5473 146.487 29.0933 146.435 29.596C146.383 30.0813 146.339 30.4193 146.305 30.61C146.27 30.766 146.227 30.87 146.175 30.922C146.123 30.974 146.019 31 145.863 31H144.433ZM157.969 12.28C159.599 12.28 160.803 12.6353 161.583 13.346C162.381 14.0567 162.779 14.984 162.779 16.128C162.779 17.0987 162.511 17.844 161.973 18.364C161.436 18.8667 160.665 19.118 159.659 19.118C159.347 19.118 159.148 19.092 159.061 19.04C158.975 18.9707 158.931 18.8407 158.931 18.65C158.931 18.4767 158.914 18.2513 158.879 17.974C158.862 17.6967 158.801 17.428 158.697 17.168C158.593 16.908 158.429 16.6913 158.203 16.518C157.978 16.3273 157.666 16.232 157.267 16.232C156.713 16.232 156.219 16.4053 155.785 16.752C155.352 17.0813 155.135 17.5147 155.135 18.052C155.135 18.52 155.309 18.9013 155.655 19.196C156.019 19.4907 156.47 19.768 157.007 20.028C157.545 20.2707 158.125 20.522 158.749 20.782C159.391 21.042 159.98 21.3887 160.517 21.822C161.055 22.238 161.497 22.7667 161.843 23.408C162.207 24.032 162.389 24.8293 162.389 25.8C162.389 26.5627 162.259 27.282 161.999 27.958C161.757 28.6167 161.384 29.1973 160.881 29.7C160.396 30.1853 159.772 30.5667 159.009 30.844C158.264 31.1213 157.389 31.26 156.383 31.26C155.517 31.26 154.711 31.1647 153.965 30.974C153.237 30.7833 152.596 30.5493 152.041 30.272C151.504 29.9773 151.079 29.6653 150.767 29.336C150.455 28.9893 150.299 28.6773 150.299 28.4C150.299 27.256 150.36 26.4327 150.481 25.93C150.62 25.4273 150.863 25.176 151.209 25.176C151.452 25.176 151.703 25.28 151.963 25.488C152.241 25.696 152.553 25.93 152.899 26.19C153.246 26.45 153.645 26.684 154.095 26.892C154.563 27.1 155.101 27.204 155.707 27.204C155.95 27.204 156.184 27.1867 156.409 27.152C156.652 27.1 156.86 27.022 157.033 26.918C157.224 26.814 157.371 26.6753 157.475 26.502C157.597 26.3287 157.657 26.1207 157.657 25.878C157.657 25.4447 157.493 25.098 157.163 24.838C156.834 24.578 156.418 24.344 155.915 24.136C155.413 23.9107 154.867 23.6853 154.277 23.46C153.705 23.2173 153.168 22.8967 152.665 22.498C152.163 22.082 151.747 21.5533 151.417 20.912C151.088 20.2707 150.923 19.4473 150.923 18.442C150.923 17.3153 151.131 16.362 151.547 15.582C151.981 14.802 152.527 14.1693 153.185 13.684C153.861 13.1813 154.615 12.826 155.447 12.618C156.297 12.3927 157.137 12.28 157.969 12.28Z"
            fill="#5DB3A4"
          />
          <Rect width="40" height="40" rx="12" fill="#427DAA" />
          <Path
            d="M24.4967 22.3041C24.8752 23.8192 25.261 25.3634 25.6396 26.8785C25.9599 28.1605 25.326 29.3404 24.0513 29.8137C22.9222 30.2505 21.582 29.7186 20.9922 28.5968C20.5771 27.8028 20.4243 26.9433 20.1841 26.1056C20.1186 25.8434 20.1769 25.4574 19.8855 25.4063C19.5286 25.3407 19.4849 25.785 19.3246 26.0108C18.4503 27.4675 17.576 28.9241 16.7018 30.3807C15.7328 31.9539 13.8608 32.143 12.6009 30.8172C11.9673 30.1397 11.8509 28.8067 12.3027 27.889C13.0531 26.3085 14.0512 24.8519 14.9838 23.3807C15.1441 23.1549 15.45 22.8927 15.217 22.5795C15.0277 22.3173 14.6853 22.5576 14.4522 22.6158C13.7456 22.7614 13.0536 22.9652 12.3325 23.0525C10.9194 23.2198 9.7177 22.4986 9.39739 21.2166C9.09893 20.022 9.84939 18.5653 11.1605 18.2377C14.2781 17.4588 17.3084 16.3303 20.5134 15.901C21.9192 15.7045 23.0262 16.4185 23.3756 17.8171C23.7469 19.303 24.1254 20.8181 24.4967 22.3041Z"
            fill="white"
          />
          <Path
            d="M28.1133 13.7681C27.0469 15.5449 24.6725 16.1162 22.8803 15.0756C21.0778 13.9937 20.4601 11.6965 21.5574 9.86827C22.6392 8.06577 24.9776 7.43776 26.7802 8.51962C28.5312 9.57058 29.1643 12.0171 28.1133 13.7681Z"
            fill="white"
          />
        </Svg>
      </View>

      <View style={styles.mainWrapper}>
        <Text style={styles.headerText}>Sign In to EduGIGS</Text>
        <TextInput
          title={'Email Address'}
          titleStyle={styles.titleStyle}
          editable={true}
          placeholder={'Enter Your Email'}
          value={emailAddress}
          onChangeText={(value) => {
            setemailAddress(value);
          }}
          style={styles.textInputView}
        />
        <TextInput
          title={'Password'}
          titleStyle={styles.titleStyle}
          editable={true}
          placeholder={'Enter Your Password'}
          value={password}
          onChangeText={(value) => {
            setpassword(value);
          }}
          style={styles.textInputView}
        />
        <Text style={styles.forgetText}>Forgot Password?</Text>
        <TouchableOpacity style={styles.button} onPress={onPressSignIn}>
          <Text style={styles.buttonTitle}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Don’t have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpTextStyle}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  iconWrapper: {flex: 0.5, alignItems: 'center', justifyContent: 'center'},
  mainWrapper: {
    flex: 3,
    backgroundColor: '#FFFFFF',
    padding: responsiveFontSize(2),
    margin: responsiveFontSize(2),
    borderRadius: responsiveFontSize(1),
  },
  headerText: {
    fontSize: responsiveFontSize(2.2),
    color: '#0A1629',
    alignSelf: 'center',
  },
  textInputView: {
    fontSize: responsiveFontSize(1.6),

    color: 'black',
    paddingHorizontal: responsiveWidth(4),
    alignSelf: 'center',
    height: responsiveHeight(7),
    width: '100%',
    borderColor: '#DAE7F1',
    borderWidth: responsiveFontSize(0.2),
  },
  titleStyle: {
    paddingTop: responsiveWidth(9),
    color: '#8C8896',
    fontSize: responsiveFontSize(1.6),
  },
  forgetText: {
    color: '#7D8593',
    alignSelf: 'flex-end',
    paddingVertical: responsiveFontSize(3),
  },
  button: {
    marginTop: responsiveFontSize(7),
    backgroundColor: '#427DAA',
    margin: responsiveFontSize(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveFontSize(1),
  },
  buttonTitle: {
    paddingVertical: responsiveFontSize(2.5),
    color: 'white',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2.4),
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: responsiveFontSize(1),
  },
  bottomText: {
    color: '#3D3A45',
    fontSize: responsiveFontSize(2.5),
  },
  signUpTextStyle: {
    color: '#427DAA',

    fontSize: responsiveFontSize(2.5),
  },
});

export default LaunchScreen;
