package com.barcode;

import com.eguma.barcodescanner.BarcodeScannerPackage;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.reactnativenavigation.activities.RootActivity;
import com.reactnativenavigation.packages.RnnPackage;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends RootActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Barcode";
    }

    @Override
    public List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new BarcodeScannerPackage(),
                new RnnPackage()
        );
    }
}
