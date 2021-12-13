(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{582:function(e,t,a){"use strict";a.r(t);var n=a(31),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"fileio-with-android"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fileio-with-android"}},[e._v("#")]),e._v(" FileIO with Android")]),e._v(" "),a("p",[e._v("Reading and writing files in Android are not different from reading and writing files in standard Java. Same "),a("code",[e._v("java.io")]),e._v(" package can be used. However, there is some specific related to the folders where you are allowed to write, permissions in general and MTP work arounds.")]),e._v(" "),a("h2",{attrs:{id:"obtaining-the-working-folder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-the-working-folder"}},[e._v("#")]),e._v(" Obtaining the working folder")]),e._v(" "),a("p",[e._v("You can get your working folder by calling the method "),a("a",{attrs:{href:"https://developer.android.com/reference/android/content/Context.html#getFilesDir()",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("getFilesDir()")]),a("OutboundLink")],1),e._v(" on your Activity (Activity is the central class in your application that inherits from Context. See "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/android/1481/activity",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v("). Reading is not different. Only your application will have access to this folder.")]),e._v(" "),a("p",[e._v("Your activity could contain the following code, for instance:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\n File myFolder = getFilesDir();\n  File myFile = new File(myFolder, "myData.bin");\n\n')])])]),a("h2",{attrs:{id:"writing-raw-array-of-bytes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-raw-array-of-bytes"}},[e._v("#")]),e._v(" Writing raw array of bytes")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\n File myFile = new File(getFilesDir(), "myData.bin");\n  FileOutputStream out = new FileOutputStream(myFile);\n\n  // Write four bytes one two three four:\n  out.write(new byte [] { 1, 2, 3, 4}\n  out.close()\n\n')])])]),a("p",[e._v("There is nothing Android specific with this code. If you write lots of small values often, use "),a("a",{attrs:{href:"https://developer.android.com/reference/java/io/BufferedOutputStream.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("BufferedOutputStream"),a("OutboundLink")],1),e._v(" to reduce the wear of the device internal SSD.")]),e._v(" "),a("h2",{attrs:{id:"serializing-the-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serializing-the-object"}},[e._v("#")]),e._v(" Serializing the object")]),e._v(" "),a("p",[e._v("The old good Java object serialization is available for you in Android. you can define Serializable classes like:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n class Cirle implements Serializable {\n    final int radius;\n    final String name;\n\n    Circle(int radius, int name) {\n      this.radius = radius;\n      this.name = name;\n    }\n  }\n\n")])])]),a("p",[e._v("and then write then to the ObjectOutputStream:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\n File myFile = new File(getFilesDir(), "myObjects.bin");\n  FileOutputStream out = new FileOutputStream(myFile);\n  ObjectOutputStream oout = new ObjectOutputStream(new BufferedOutputStream(out));\n\n  oout.writeObject(new Circle(10, "One"));\n  oout.writeObject(new Circle(12, "Two"));\n  \n  oout.close()\n\n')])])]),a("p",[e._v("Java object serialization may be either perfect or really bad choice, depending on what do you want to do with it - outside the scope of this tutorial and sometimes opinion based. Read about the "),a("a",{attrs:{href:"http://www.javaworld.com/article/2071731/core-java/ensure-proper-version-control-for-serialized-objects.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("versioning"),a("OutboundLink")],1),e._v(" first if you decide to use it.")]),e._v(" "),a("h2",{attrs:{id:"writing-to-external-storage-sd-card"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-to-external-storage-sd-card"}},[e._v("#")]),e._v(" Writing to external storage (SD card)")]),e._v(" "),a("p",[e._v("You can also read and write from/to memory card (SD card) that is present in many Android devices. Files in this location can be accessed by other programs, also directly by the user after connecting device to PC via USB cable and enabling MTP protocol.")]),e._v(" "),a("p",[e._v("Finding the SD card location is somewhat more problematic. The "),a("a",{attrs:{href:"https://developer.android.com/reference/android/os/Environment.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Environment"),a("OutboundLink")],1),e._v(' class contains static methods to get "external directories" that should normally be inside the SD card, also information if the SD card exists at all and is writable. '),a("a",{attrs:{href:"http://stackoverflow.com/questions/5694933/find-an-external-sd-card-location",target:"_blank",rel:"noopener noreferrer"}},[e._v("This question"),a("OutboundLink")],1),e._v(" contains valuable answers how to make sure the right location will be found.")]),e._v(" "),a("p",[e._v("Accessing external storage requires permissions in you Android manifest:")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("uses")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("permission android"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"android.permission.WRITE_EXTERNAL_STORAGE"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("uses")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("permission android"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"android.permission.READ_EXTERNAL_STORAGE"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n")])])]),a("p",[e._v("For older versions of Android putting permissions it is enough to put these permissions into manifest (the user must approve during installation). However starting from Android 6.0 Android asks the user for approval at the time of the first access, and you must support this new approach. Otherwise access is denied regardless of your manifest.")]),e._v(" "),a("p",[e._v("In Android 6.0, first you need to check for permission, then, if not granted, request it. The code examples can be found inside "),a("a",{attrs:{href:"http://stackoverflow.com/questions/33139754/android-6-0-marshmallow-cannot-write-to-sd-card",target:"_blank",rel:"noopener noreferrer"}},[e._v("this SO question"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"solving-invisible-mtp-files-problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solving-invisible-mtp-files-problem"}},[e._v("#")]),e._v(' Solving "Invisible MTP files" problem.')]),e._v(" "),a("p",[e._v("If you create files for exporting via USB cable to desktop using MTP protocol, may be a problem that newly created files are not immediately visible in the file explorer running on the connected desktop PC. To to make new files visible, you need to call "),a("a",{attrs:{href:"https://developer.android.com/reference/android/media/MediaScannerConnection.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MediaScannerConnection"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("File")]),e._v(" file "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("File")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getExternalStoragePublicDirectory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("DIRECTORY_DOCUMENTS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"theDocument.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("FileOutputStream")]),e._v(" out "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("FileOutputStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("write the document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\nout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("MediaScannerConnection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("scanFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("getPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sendBroadcast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Intent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Intent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ACTION_MEDIA_SCANNER_SCAN_FILE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("fromFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n")])])]),a("p",[e._v("This MediaScannerConnection call code works for files only, not for directories. The problem is described in "),a("a",{attrs:{href:"https://code.google.com/p/android/issues/detail?id=38282",target:"_blank",rel:"noopener noreferrer"}},[e._v("this Android bug report"),a("OutboundLink")],1),e._v(". This may be fixed for some version in the future, or on some devices.")]),e._v(" "),a("h2",{attrs:{id:"working-with-big-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-big-files"}},[e._v("#")]),e._v(" Working with big files")]),e._v(" "),a("p",[e._v("Small files are processed in a fraction of second and you can read / write them in place of the code where you need this. However if the file is bigger or otherwise slower to process, you may need to use AsyncTask in Android to work with the file in the background:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\n   class FileOperation extends AsyncTask<String, Void, File> {\n\n        @Override\n        protected File doInBackground(String... params) {\n          try {\n            File file = new File(Environment.getExternalStoragePublicDirectory(\n            Environment.DIRECTORY_DOCUMENTS), "bigAndComplexDocument.odf");\n            FileOutputStream out = new FileOutputStream(file)\n\n           ... (write the document)\n\n            out.close()\n            return file;\n            } catch (IOException ex) {\n               Log.e("Unable to write", ex);\n               return null;\n              }\n        }\n\n        @Override\n        protected void onPostExecute(File result) {\n          // This is called when we finish \n        }\n\n        @Override\n        protected void onPreExecute() {\n           // This is called before we begin\n        }\n\n        @Override\n        protected void onProgressUpdate(Void... values) {\n            // Unlikely required for this example\n        }\n    }\n}\n\n')])])]),a("p",[e._v("and then")]),e._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("FileOperation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Some parameters"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("    \n\n")])])]),a("p",[a("a",{attrs:{href:"http://stackoverflow.com/questions/9671546/asynctask-android-example",target:"_blank",rel:"noopener noreferrer"}},[e._v("This SO question"),a("OutboundLink")],1),e._v(" contains the complete example on how to create and call the AsyncTask. Also see the "),a("a",{attrs:{href:"http://stackoverflow.com/questions/3690980/asynctask-error-handling",target:"_blank",rel:"noopener noreferrer"}},[e._v("question on error"),a("OutboundLink")],1),e._v(" handling on how to handle IOExceptions and other errors.")]),e._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[e._v("#")]),e._v(" Remarks")]),e._v(" "),a("p",[e._v("Android provides means for sharing the file between multiple applications as documented "),a("a",{attrs:{href:"https://developer.android.com/training/secure-file-sharing/setup-sharing.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". This is not required if there is only one app that creates and uses the file.")]),e._v(" "),a("p",[e._v("Android provides "),a("a",{attrs:{href:"https://developer.android.com/guide/topics/data/data-storage.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("alternative storage options"),a("OutboundLink")],1),e._v(" like shared and private preferences, saved bundles and built-in database. In some cases, they are better choice than just using plain files.")]),e._v(" "),a("p",[e._v("Android activity does have few specific methods that look like replacements of the Java standard File IO methods. For instance, instead for "),a("a",{attrs:{href:"https://docs.oracle.com/javase/7/docs/api/java/io/File.html#delete()",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("File.delete()")]),a("OutboundLink")],1),e._v(" you can call "),a("a",{attrs:{href:"https://developer.android.com/reference/android/content/Context.html#deleteFile(java.lang.String)",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Context.deleteFile()")]),a("OutboundLink")],1),e._v(", and instead of applying "),a("a",{attrs:{href:"https://docs.oracle.com/javase/7/docs/api/java/io/File.html#listFiles()",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("File.listFiles()")]),a("OutboundLink")],1),e._v(" recursively you can call "),a("a",{attrs:{href:"https://developer.android.com/reference/android/content/Context.html#fileList()",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Context.fileList()")]),a("OutboundLink")],1),e._v(" to get the list of all your app specific files with somewhat less code. However, they do not provide extra functionality beyond standard "),a("code",[e._v("java.io")]),e._v(" package.")])])}),[],!1,null,null,null);t.default=r.exports}}]);